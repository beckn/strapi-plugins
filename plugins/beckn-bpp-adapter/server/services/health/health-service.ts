import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getHealthMessage() {
    // return 'Added support for Mobility 🚀';
    return {
      credentials: [
        {
          type: "organization",
          verifiableCredential: {

            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://cord.network/2023/cred/v1"
            ],
            "type": [
              "VerifiableCredential"
            ],
            "issuer": "did:cord:3zKcL2oAsvZZwFA5uPxtysk5jsai2TGx4AvrpJcBYmAwzGyN",
            "issuanceDate": "2024-10-23T04:50:59.258Z",
            "credentialSubject": {
              "name": "demo22",
              "email": "demo22@gmail.com",
              "id": "did:cord:3zKcL2oAsvZZwFA5uPxtysk5jsai2TGx4AvrpJcBYmAwzGyN",
              "@context": {
                "vocab": "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M#"
              }
            },
            "validFrom": "2024-10-23T04:50:59.258Z",
            "validUntil": "2025-10-23T04:50:59.258Z",
            "metadata": {},
            "credentialSchema": {
              "$id": "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
              "title": "Test_224:da01d058-c374-4814-a992-d668dcd20390",
              "properties": {
                "name": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                }
              },
              "required": [],
              "type": "object",
              "additionalProperties": false,
              "$schema": "http://cord.network/draft-01/schema#"
            },
            "credentialHash": "0xe5bd001e71741d5827926a093dbea3cf3c56e163ced4fec7e338f7ef49259d86",
            "id": "stmt:cord:s3eVwP3JCLwVyWa8ECCG42defDbpndDxGYDGKtDfS8mqPrzG7",
            "proof": [
              {
                "type": "Ed25519Signature2020",
                "created": "Wed Oct 23 2024 04:50:59 GMT+0000 (Coordinated Universal Time)",
                "proofPurpose": "sr25519",
                "verificationMethod": "did:cord:3zKcL2oAsvZZwFA5uPxtysk5jsai2TGx4AvrpJcBYmAwzGyN#0xaebd479b52b61ec4954a5478e6285bff0a5508b53f30ee5c552061efd4c89842",
                "proofValue": "z65c9i4zxh2udUtLBoH7Rdm7CnjL5W4CzmNNt3Ehqm4zG75CDjtuLFGBEEKiA9aH5uJ69A7NBrHGwC3kj2CLZzk7M"
              },
              {
                "type": "CordProof2024",
                "elementUri": "stmt:cord:s3eVwP3JCLwVyWa8ECCG42defDbpndDxGYDGKtDfS8mqPrzG7:e5bd001e71741d5827926a093dbea3cf3c56e163ced4fec7e338f7ef49259d86",
                "spaceUri": "space:cord:c35h1XGuUXDHwtJTre7dwsb7KqZM5DWYA4kpPRuSx6BZJnXTg",
                "schemaUri": "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
                "creatorUri": "did:cord:3zKcL2oAsvZZwFA5uPxtysk5jsai2TGx4AvrpJcBYmAwzGyN",
                "digest": "0xe5bd001e71741d5827926a093dbea3cf3c56e163ced4fec7e338f7ef49259d86",
                "identifier": "stmt:cord:s3eVwP3JCLwVyWa8ECCG42defDbpndDxGYDGKtDfS8mqPrzG7",
                "genesisHash": "0x99f72c0a4e8ec69365bb2b480302b719465d838cfefa9db0c5a91eed5378285c"
              },
              {
                "type": "CordSDRProof2024",
                "defaultDigest": "0xcd81de95c2fdf2f36f16284e917fe27597cf8e3f50656ab4cc75f5267109b1ab",
                "hashes": [
                  "0x52090f62da9d7f6dae8497f16c0443b6d3c49d0e7381d19cc6f85014956f180e",
                  "0x5c98f74ae854a165c962019dfd4e6b681325ac973276093469b98ccfc3068252",
                  "0xa8d7ddb1b99ce9a5b484582d55f6354fe9b0ac752efefb0267e331f6899d7e63"
                ],
                "nonceMap": {
                  "0xce063d6f1061c4e14ad00754bbada7e7442b2dbb6e47141be643db95dc0ba743": "48f98059-5122-45ff-98ee-e91642075658",
                  "0x23e5d34d7be700c1ad6b771834e9c62fb324a0174cb33e23a72cf9c812b50ac4": "38ba1855-dddd-444f-a821-6b9cbf99437c",
                  "0xaeb3bb5814744a5f19af0f26c025def922b25fc1f0fe4b5b55a1934d30c5ca61": "b29b67c2-151b-4d3f-b991-9c49401b69d9"
                },
                "genesisHash": "0x99f72c0a4e8ec69365bb2b480302b719465d838cfefa9db0c5a91eed5378285c"
              }
            ]
          }
        }
      ]
    }
  },
});
