import { JSDOM } from 'jsdom';
import _sodium from 'libsodium-wrappers';
export async function getSiteVerificationContent(siteUrl: string) {
  const response = await fetch(siteUrl);
  if (!response.ok) throw new Error(`Failed to read the ${siteUrl}`);

  const html = await response.text();
  const dom = new JSDOM(html);
  const metaTag = dom.window.document.querySelector('meta[name="site-verification"]');
  const content = metaTag ? metaTag.getAttribute('content') : null;

  return content;
}

export const decryptMessage = async (signedMessageBase64: string, publicKeyBase64: string) => {
  try {
    await _sodium.ready;
    const sodium = _sodium;

    // Convert values from Base64 to Uint8Array
    const signedMessage = sodium.from_base64(signedMessageBase64, sodium.base64_variants.ORIGINAL);
    const publicKey = sodium.from_base64(publicKeyBase64, sodium.base64_variants.ORIGINAL);

    // Verify and extract the original message
    const originalMessage = sodium.crypto_sign_open(signedMessage, publicKey);

    // Convert Uint8Array back to a string
    return new TextDecoder().decode(originalMessage);
  } catch (error) {
    throw new Error(
      'Signature verification failed. The message is either tampered with or the public key is incorrect.'
    );
  }
};

export const onSubscribe = async (
  subscriberId: string,
  subscriberUrl: string,
  challenge: string
) => {
  console.log('Preparing request to subscriber:', subscriberUrl);

  const url = `${subscriberUrl}/on_subscribe`;
  const payload = {
    subscriber_id: subscriberId, // Assign the actual subscriber ID dynamically
    challenge: challenge, // Generate a random challenge string
  };

  console.log('Request URL:', url);
  console.log('Request Payload:', JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Response Status:', response.status);

    if (!response.ok) {
      const errorText = await response.json();
      console.error('Error Response:', errorText);
      throw new Error(
        `HTTP error! Status: ${response.status}, Response: ${JSON.stringify(errorText)}`
      );
    }

    const responseData = await response.json();
    console.log('Response Data:', JSON.stringify(responseData, null, 2));

    return responseData;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
};
