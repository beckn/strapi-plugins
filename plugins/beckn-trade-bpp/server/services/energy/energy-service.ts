import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({

    async login(loginDto: any) {
        try {
            const { email, password } = loginDto;

            const user = await strapi
                .query("plugin::users-permissions.user")
                .findOne({
                    where: { email: { $eqi: email } },
                    populate: {
                        role: true,
                        agent: true,
                        provider: true
                    }
                });
            console.log("User info::: ", user);
            if (!user) {
                throw new Error("Email Not found");
            }

            // Request API.
            const response = await axios.post(
                `${process.env.STRAPI_BPP_URL}/api/auth/local`,
                {
                    identifier: email,
                    password
                }
            );
            delete user.password;
            return { ...response.data, user };
        } catch (error) {
            console.log("Error Occured:: ", error.message);
            if (error.message === "Email Not found") {
                throw error;
            }
            throw new Error("Wrong Password");
        }
    },
    async signup(signupDto: any) {
       const trx: any = await strapi.db.transaction();
       console.log('Created txn: ', trx);
       
        try {
            //fetch mdm user
            //if mdm user does not exist throw error
            //const mdmUser = await axios.get('http://127.0.0.1:1339/mdm-user/getConsumer', );
            const mdm = {
                data: {
                    customer_id: '23145'
                }
            }
            const mdmUser = mdm?.data;
            if(!mdmUser || !Object.keys(mdmUser).length) {
                throw new Error('No MDM user found');
            }
            let user = await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { email: { $eqi: signupDto.email } }, });
            console.log("User info::: ", user);
            if (user) {
                throw new Error("Email already used. Signup with other email!");
            }
            //add agent profile then agent and then user
            const { email, password, first_name,last_name, phone_number } = signupDto;
            
            const agentProfile = await strapi
            .entityService
            .create('api::agent-profile.agent-profile', {
                data: {
                    phone_number,
                    customer_id: mdmUser.customer_id
                },
                transaction: trx
            });
            console.log('Created agent profile: ', agentProfile);
            
            const agent = await strapi
            .entityService
            .create('api::agent.agent', {
                data: {
                    first_name,
                    last_name,
                    agent_profile: agentProfile.id
                },
                transaction: trx
            });
            console.log('Created agent : ', agent);
            const createdUser = await strapi
            .entityService
            .create('plugin::users-permissions.user', {
                data: {
                    email,
                    password,
                    username: email,
                    confirmed: true,
                    agent: agent.id
                },
                transaction: trx
            });
            console.log('Created user: ', createdUser);
            //Issue Credential using Dhiway SDK
            
            // Request API.
            // const response = await axios.post(
            //     `${process.env.STRAPI_BPP_URL}/api/auth/local/register`,
            //     {
            //         username: email,
            //         password,
            //         email,
            //     }
            // );
            //get credentails
            const vc = await this.getCredential(signupDto);
            //store the credential and update it in agent profile
            const cred = await strapi
            .entityService
            .create('api::credential.credential', {
                data: {
                    vc
                },
                transaction: trx
            });
            //update the agent profile table
            const agentProfileUpdated = await strapi
            .entityService
            .update('api::agent-profile.agent-profile', agentProfile.id, {
                data: {
                    credential: cred.id
                },
                transaction: trx
            });
            await trx.commit(); 
            delete createdUser.password;
            return createdUser;
        } catch (error) {
            await trx.rollback();
            console.log("Error Occured:: ", error);
            if (error.message === "Email Not found") {
                throw error;
            }
            throw new Error(error.message);
        }
    },
    async getCredential(credDto: any) {
        const { first_name, last_name, email } = credDto;
        // const payload = {
        //     schemaId: "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
        //     properties: {
        //         name: first_name + ' ' + last_name,
        //         email
        //     }
        // }
        const cred = await axios.post('https://issuer-agent.demo.dhiway.com/api/v1/cred',
            {
                schemaId: "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
                properties: {
                    name: first_name + ' ' + last_name,
                    email
                }
            }
        );
        console.log('cred generated: ', cred.data);
        return cred.data.vc;
    }
});
