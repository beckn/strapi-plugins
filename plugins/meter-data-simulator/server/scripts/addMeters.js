// @ts-nocheck
const meters = [
  {
    code: "MTR001",
    parent: null,
    consumptionLoadFactor: 1.1,
    productionLoadFactor: 0.2,
    type: "SMART",
    city: "San Francisco",
    state: "California",
    latitude: 37.7749,
    longitude: -122.4194,
    pincode: "94103",
    appliances: ["Refrigerator", "Washing Machine", "Television (LED)"]
  },
  {
    code: "MTR002",
    parent: null,
    consumptionLoadFactor: 1.0,
    productionLoadFactor: 0.3,
    type: "NETMETER",
    city: "San Francisco",
    state: "California",
    latitude: 37.775,
    longitude: -122.4195,
    pincode: "94103",
    appliances: ["Solar Panel (production)", "Electric Geyser"]
  },
  {
    code: "MTR003",
    parent: null,
    consumptionLoadFactor: 0.9,
    productionLoadFactor: 0.0,
    type: "ONE-PH",
    city: "San Francisco",
    state: "California",
    latitude: 37.7751,
    longitude: -122.4196,
    pincode: "94103",
    appliances: [
      "Refrigerator",
      "Microwave Oven",
      "Television (LED)",
      "Ceiling Fan"
    ]
  },
  {
    code: "MTR004",
    parent: null,
    consumptionLoadFactor: 1.2,
    productionLoadFactor: 0.1,
    type: "THREE-PH",
    city: "San Francisco",
    state: "California",
    latitude: 37.7752,
    longitude: -122.4197,
    pincode: "94103",
    appliances: ["Air Conditioner (1.5 Ton)", "Water Pump"]
  },
  {
    code: "MTR005",
    parent: null,
    consumptionLoadFactor: 1.0,
    productionLoadFactor: 0.5,
    type: "NETMETER",
    city: "San Francisco",
    state: "California",
    latitude: 37.7753,
    longitude: -122.4198,
    pincode: "94103",
    appliances: ["Solar Panel (production)", "Refrigerator", "Television (LED)"]
  },
  {
    code: "MTR006",
    parent: null,
    consumptionLoadFactor: 0.8,
    productionLoadFactor: 0.0,
    type: "ONE-PH",
    city: "San Francisco",
    state: "California",
    latitude: 37.7754,
    longitude: -122.4199,
    pincode: "94103",
    appliances: [
      "Refrigerator",
      "Television (LED)",
      "Ceiling Fan",
      "LED Bulb (10W)"
    ]
  },
  {
    code: "MTR007",
    parent: null,
    consumptionLoadFactor: 1.3,
    productionLoadFactor: 0.3,
    type: "SMART",
    city: "San Francisco",
    state: "California",
    latitude: 37.7755,
    longitude: -122.42,
    pincode: "94103",
    appliances: ["Air Conditioner (1.5 Ton)", "Television (LED)"]
  },
  {
    code: "MTR008",
    parent: null,
    consumptionLoadFactor: 1.0,
    productionLoadFactor: 0.0,
    type: "THREE-PH",
    city: "San Francisco",
    state: "California",
    latitude: 37.7756,
    longitude: -122.4201,
    pincode: "94103",
    appliances: ["Water Pump", "Air Conditioner (1.5 Ton)", "Refrigerator"]
  },
  {
    code: "MTR009",
    parent: null,
    consumptionLoadFactor: 1.1,
    productionLoadFactor: 0.4,
    type: "NETMETER",
    city: "San Francisco",
    state: "California",
    latitude: 37.7757,
    longitude: -122.4202,
    pincode: "94103",
    appliances: [
      "Solar Panel (production)",
      "Refrigerator",
      "Television (LED)",
      "Air Conditioner (1.5 Ton)"
    ]
  },
  {
    code: "MTR010",
    parent: null,
    consumptionLoadFactor: 0.95,
    productionLoadFactor: 0.0,
    type: "ONE-PH",
    city: "San Francisco",
    state: "California",
    latitude: 37.7758,
    longitude: -122.4203,
    pincode: "94103",
    appliances: ["Refrigerator", "Television (LED)"]
  }
];

const API_URL = "http://127.0.0.1:1337/api/meters";
const APPLIANCE_API_URL = "http://127.0.0.1:1337/api/appliances";
const TOKEN =
  "b1f7ea537367985702d2361b4f10a546a54f2f38142d07932f9c349dfbbdf74c3bc50cee67690051a46190b22a3e97df566456a1d7419c635778e0b542458ab683917714b5318a846dc6dd8b7fdd9bb3b4e39f77b2aa10da663e9249d355168c7077d69c04b4264aa238ac233b95e1c9dc343abf34452ccafd4b158cf272ca0b"; // Replace with your actual token

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`
};

async function meterExists(code) {
  const res = await fetch(`${API_URL}?filters[code][$eq]=${code}`, {
    headers
  });

  if (!res.ok) {
    console.error(`Failed to check existence of ${code}`);
    return true; // Assume exists to avoid duplicates in error case
  }

  const data = await res.json();
  return data.data.length > 0;
}

async function getApplianceId(name) {
  const res = await fetch(
    `${APPLIANCE_API_URL}?filters[name][$eq]=${encodeURIComponent(name)}`,
    {
      headers
    }
  );

  if (!res.ok) {
    console.error(`Failed to check existence of appliance ${name}`);
    return null;
  }

  const data = await res.json();
  return data.data.length > 0 ? data.data[0].id : null;
}

async function seedMeters() {
  for (const meter of meters) {
    const exists = await meterExists(meter.code);

    if (exists) {
      console.log(`Meter ${meter.code} already exists. Skipping.`);
      continue;
    }

    // // Replace appliance names with IDs before creating meter
    // if (meter.appliances && meter.appliances.length > 0) {
    //   const applianceIds = [];
    //   for (const applianceName of meter.appliances) {
    //     const applianceId = await getApplianceId(applianceName);
    //     if (applianceId) {
    //       applianceIds.push(applianceId);
    //     } else {
    //       console.log(`Appliance ${applianceName} not found. Skipping.`);
    //     }
    //   }
    //   // Replace appliances array with IDs
    //   meter.appliances = applianceIds;
    // }

    try {
      // Create meter first
      const response = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ data: meter })
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`Created: ${result.data.attributes.code}`);

        // Link existing appliances
        if (meter.appliances && meter.appliances.length > 0) {
          const meterId = result.data.id;
          const applianceIds = [];

          for (const applianceName of meter.appliances) {
            const applianceId = await getApplianceId(applianceName);
            if (applianceId) {
              applianceIds.push(applianceId);
            } else {
              console.log(`Appliance ${applianceName} not found. Skipping.`);
            }
          }

          // Update meter with appliance relations
          if (applianceIds.length > 0) {
            await fetch(`${API_URL}/${meterId}`, {
              method: "PUT",
              headers,
              body: JSON.stringify({
                data: {
                  appliances: applianceIds
                }
              })
            });
            console.log(
              `Linked ${applianceIds.length} appliances to meter ${meter.code}`
            );
          }
        }
      } else {
        console.error(
          `Failed to create ${meter.code}:`,
          result.error || result
        );
      }
    } catch (err) {
      console.error(`Error creating ${meter.code}:`, err.message);
    }
  }
}

seedMeters();
