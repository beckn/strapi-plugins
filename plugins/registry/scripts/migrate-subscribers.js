const accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJZcE1WdUNYNnNlalM2UkVfeUVyQnY0SHI4cF9SbDFwWjlmR3FkMWNfbkhRIn0.eyJleHAiOjE3NDQwNDEzNjksImlhdCI6MTc0NDAxOTc2OSwianRpIjoiOTNlNTE0ZmQtYjM2OC00YzFkLThkODYtZWY2MGJmMWIwN2UxIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5kZW1vLmRoaXdheS5jb20vcmVhbG1zL2RoaXdheS10ZXN0IiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6ImE5ZjRjZGVmLWZhZTMtNDI5YS05NTdhLTJiYzZkMTA4MzVkNCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImRoaXdheUNsaWVudCIsInNlc3Npb25fc3RhdGUiOiI0MTM2YzE1OC1jN2Y2LTQwYzktYWNkOS00Nzg0NjdhNGJhYTUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRoaXdheS10ZXN0Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsibWFuYWdlLXVzZXJzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNDEzNmMxNTgtYzdmNi00MGM5LWFjZDktNDc4NDY3YTRiYWE1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJNYXJsZW5lIEhhbW1lcyIsInByZWZlcnJlZF91c2VybmFtZSI6ImthbXJvbjMzIiwiZ2l2ZW5fbmFtZSI6Ik1hcmxlbmUiLCJmYW1pbHlfbmFtZSI6IkhhbW1lcyIsImVtYWlsIjoiYXJkZW50LmFqYXkrMUBnbWFpbC5jb20ifQ.UaGZE9u-UqPpXWYNXmIUNnZzTytZ207qgzlITRgvrJccv0RZre9HvKt-Tb3Vs6iadJtS4XgaQIuuen-edTnp5Z4len_gtQOH9NKz5naJMveaRXoc6PNEaUnHh74b97BjpbBoiIgu9aUADzc-bKoC9yJKwjDKju5I_Dj6RFLQ0u5xu4opxP8SD-ekPjjRM9JsrnOPeHtRLwguytTRPq4QqZWQ2PaIkR9gRAyULf0Zm_PdV2wdI1uEALWsVPuStAoIgf_NWib3Pdvwbdj1iIsn8SGNEyHAaQwW717k4YR4wpsEdA3N-m4n9HWD3zcQx14xThpoBhf7PipjU2x2WwXqGA';

// namespace: mtest-01
const namespaceId = 'namespace:cord:tirbrjrSYV6bhbG7z9dvEkex8Wabfdt5xfEpup8YHqBgHVgjE';
const subscriberRegistryName = 'network-subscribers';
const dediBaseUrl = 'https://sandbox.dedi.global/dedi';
const registryBaseUrl = 'https://registry-dev.becknprotocol.io';

async function getAllSubscribers() {
  console.log(`Fetching all subscribers from registry ${registryBaseUrl}/subscribers/lookup...`);
  try {
    const response = await fetch(`${registryBaseUrl}/subscribers/lookup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'JSESSIONID=node01fny0fmsx9wey1gsn9as8gvdsq2276.node0',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const subscribers = await response.json();
    console.log(`Successfully fetched ${subscribers.length} subscribers from registry`);
    return subscribers;
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    throw error;
  }
}

function nanoid(length = 21) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function transformToDeDiFormat(subscriber) {
  console.log(`Transforming subscriber ${subscriber.subscriber_id} to DeDi format...`);
  return {
    record_name: nanoid(),
    description: `${subscriber.subscriber_id} - ${subscriber.domain || 'deg:retail'}`,
    details: {
      signing_public_key: subscriber.signing_public_key,
      subscriber_id: subscriber.subscriber_id,
      key_id: subscriber.unique_key_id,
      valid_until: subscriber.valid_until,
      url: subscriber.subscriber_url,
      created: subscriber.created,
      valid_from: subscriber.valid_from,
      type: subscriber.type,
      encr_public_key: subscriber.encr_public_key,
      updated: subscriber.updated,
      status: subscriber.status,
      city_code: 'STD:080',
      country_code: 'IND',
      domain: subscriber.domain || 'deg:retail',
      nonce: '',
    },
  };
}

function filterBAPAndBPPSubscribers(subscribers) {
  return subscribers.filter((subscriber) => subscriber.type === 'BAP' || subscriber.type === 'BPP');
}

function transformSubscribers(subscribers) {
  console.log(`Starting transformation of ${subscribers.length} subscribers to DeDi format...`);
  const transformed = subscribers.map((subscriber) => transformToDeDiFormat(subscriber));
  console.log('Successfully transformed all subscribers to DeDi format');
  return transformed;
}

async function subscriberExist(subscriberId) {
  try {
    const url = `${dediBaseUrl}/query/${namespaceId}/${subscriberRegistryName}?name=${subscriberId}&page=1&page_size=2000`;
    console.log(`Checking if subscriber ${subscriberId} exists in DeDi at ${url}`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HTTP error details:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
    }

    const result = await response.json();
    const existingRecord = result.data.records?.find(
      (record) => record.details.subscriber_id == subscriberId
    );
    console.log(
      `Subscriber ${subscriberId} ${existingRecord ? 'exists' : 'does not exist'} in DeDi`
    );
    return existingRecord;
  } catch (error) {
    console.error('Error checking subscriber in DeDi:', error);
    throw error;
  }
}

async function addRecordToDeDi(record) {
  console.log(`Adding record for subscriber ${record.details.subscriber_id} to DeDi...`);
  console.log('Record:', JSON.stringify(record, null, 2));
  try {
    const url = `${dediBaseUrl}/${namespaceId}/${subscriberRegistryName}/add-record`;
    console.log(`Adding record for subscriber ${record.details.subscriber_id} to DeDi at ${url}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HTTP error details:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
    }

    const result = await response.json();
    console.log(`Successfully added record for subscriber ${record.details.subscriber_id} to DeDi`);
    return result;
  } catch (error) {
    console.error('Error adding record to DeDi:', error);
    throw error;
  }
}

async function migrateSubscribersToDeDi(subscribers) {
  for (const subscriber of subscribers) {
    console.log(
      '-----------------------------------------------------------------------------------'
    );
    try {
      const existingRecord = await subscriberExist(subscriber.details.subscriber_id);
      if (existingRecord) {
        continue;
      }
      const result = await addRecordToDeDi(subscriber);
      console.log(`Successfully migrated subscriber ${subscriber.details.subscriber_id}:`, result);
    } catch (error) {
      console.error(`Failed to migrate subscriber ${subscriber.details.subscriber_id}:`, error);
    }
  }
}

(async () => {
  const subscribers = await getAllSubscribers();
  const filteredSubscribers = filterBAPAndBPPSubscribers(subscribers);
  console.log(`Found ${filteredSubscribers.length} BAP and BPP subscribers to migrate`);
  const deDiSubscribers = transformSubscribers(filteredSubscribers);
  await migrateSubscribersToDeDi(deDiSubscribers);
})();
