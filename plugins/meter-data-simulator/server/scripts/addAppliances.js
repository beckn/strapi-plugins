const BASE_URL = "http://127.0.0.1:1337/api/appliances"; // Replace with your Strapi URL
const TOKEN = "your_strapi_jwt_token"; // Replace with your JWT

const headers = {
  "Content-Type": "application/json",
  //   Authorization: `Bearer ${TOKEN}`,
};

const appliances = [
  {
    name: "LED Bulb (10W)",
    powerRating: 10,
    baseKWh: 0.00017,
    description: "Very low-power appliance",
  },
  {
    name: "Ceiling Fan",
    powerRating: 75,
    baseKWh: 0.00125,
    description: "Common residential usage",
  },
  {
    name: "Television (LED)",
    powerRating: 120,
    baseKWh: 0.002,
    description: "Entertainment",
  },
  {
    name: "Refrigerator",
    powerRating: 200,
    baseKWh: 0.00333,
    description: "Compressor cycles ON/OFF",
  },
  {
    name: "Laptop Charger",
    powerRating: 65,
    baseKWh: 0.00108,
    description: "Varies by model",
  },
  {
    name: "Microwave Oven",
    powerRating: 1000,
    baseKWh: 0.01667,
    description: "High-power but short usage",
  },
  {
    name: "Washing Machine",
    powerRating: 500,
    baseKWh: 0.00833,
    description: "Motor + water heater load",
  },
  {
    name: "Air Conditioner (1.5 Ton)",
    powerRating: 1500,
    baseKWh: 0.025,
    description: "High-power appliance",
  },
  {
    name: "Room Heater",
    powerRating: 2000,
    baseKWh: 0.03333,
    description: "Constant high power",
  },
  {
    name: "Electric Geyser",
    powerRating: 3000,
    baseKWh: 0.05,
    description: "Very high-demand heating",
  },
  {
    name: "Water Pump",
    powerRating: 750,
    baseKWh: 0.0125,
    description: "Moderate mechanical load",
  },
  {
    name: "Solar Panel (production)",
    powerRating: 1200,
    baseKWh: 0.02,
    description: "",
  },
];

const createIfNotExists = async (appliance) => {
  const query = `?filters[name][$eq]=${encodeURIComponent(appliance.name)}`;
  const checkRes = await fetch(`${BASE_URL}${query}`, {
    method: "GET",
    headers,
  });

  const existing = await checkRes.json();

  if (existing.data && existing.data.length > 0) {
    console.log(`🔁 Skipped (already exists): ${appliance.name}`);
    return;
  }

  const createRes = await fetch(BASE_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ data: appliance }),
  });

  const created = await createRes.json();
  console.log(`✅ Created: ${appliance.name}`, created);
};

(async () => {
  for (const appliance of appliances) {
    try {
      await createIfNotExists(appliance);
    } catch (error) {
      console.error(`❌ Error with ${appliance.name}:`, error);
    }
  }
})();
