// @ts-nocheck
const energyResources = [
  { name: "John's Home", type: "CONSUMER", meterCode: "MTR001" },
  { name: "Maya's Residence", type: "PROSUMER", meterCode: "MTR002" },
  { name: "Singh Villa", type: "CONSUMER", meterCode: "MTR003" },
  { name: "Fernandez Apartment", type: "PROSUMER", meterCode: "MTR004" },
  { name: "Patel House", type: "CONSUMER", meterCode: "MTR005" },
  { name: "Zhao Residence", type: "PROSUMER", meterCode: "MTR006" },
  { name: "Khan's Home", type: "CONSUMER", meterCode: "MTR007" },
  { name: "Nguyen Family Home", type: "PROSUMER", meterCode: "MTR008" },
  { name: "O'Connor Cottage", type: "CONSUMER", meterCode: "MTR009" },
  { name: "Kim Residence", type: "PROSUMER", meterCode: "MTR010" }
];

const ENERGY_API_URL = "http://127.0.0.1:1337/api/energy-resources";
const METER_API_URL = "http://127.0.0.1:1337/api/meters";
const TOKEN =
  "b1f7ea537367985702d2361b4f10a546a54f2f38142d07932f9c349dfbbdf74c3bc50cee67690051a46190b22a3e97df566456a1d7419c635778e0b542458ab683917714b5318a846dc6dd8b7fdd9bb3b4e39f77b2aa10da663e9249d355168c7077d69c04b4264aa238ac233b95e1c9dc343abf34452ccafd4b158cf272ca0b"; // Replace with your token

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`
};

async function energyResourceExists(name) {
  const res = await fetch(
    `${ENERGY_API_URL}?filters[name][$eq]=${encodeURIComponent(name)}`,
    {
      headers
    }
  );

  if (!res.ok) return true; // prevent duplication if check fails
  const data = await res.json();
  return data.data.length > 0;
}

async function getMeterIdByCode(code) {
  const res = await fetch(
    `${METER_API_URL}?filters[code][$eq]=${encodeURIComponent(code)}`,
    {
      headers
    }
  );

  if (!res.ok) {
    console.error(`Failed to fetch meter with code ${code}`);
    return null;
  }

  const data = await res.json();
  return data.data.length ? data.data[0].id : null;
}

async function seedEnergyResources() {
  for (const resource of energyResources) {
    const exists = await energyResourceExists(resource.name);
    if (exists) {
      console.log(`Energy Resource ${resource.name} already exists. Skipping.`);
      continue;
    }

    const meterId = await getMeterIdByCode(resource.meterCode);
    if (!meterId) {
      console.log(
        `Meter ${resource.meterCode} not found. Skipping ${resource.name}.`
      );
      continue;
    }

    const payload = {
      name: resource.name,
      type: resource.type,
      meter: meterId
    };

    try {
      const res = await fetch(ENERGY_API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ data: payload })
      });

      const result = await res.json();

      if (res.ok) {
        console.log(`Created: ${result.data.attributes.name}`);
      } else {
        console.error(
          `Failed to create ${resource.name}:`,
          result.error || result
        );
      }
    } catch (err) {
      console.error(`Error creating ${resource.name}:`, err.message);
    }
  }
}

seedEnergyResources();
