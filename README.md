# Beckn Strapi Plugins

This repository contains a collection of plugins for Strapi CMS, designed to simplify the implementation of the [Beckn Protocol](https://becknprotocol.io/). These plugins aim to help developers integrate Beckn-compliant services into their Strapi-based applications seamlessly.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Available Plugins](#available-plugins)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Beckn Protocol is an open and decentralized standard designed to enable interoperability among various digital platforms. These Strapi plugins provide ready-made tools and configurations for implementing the protocol, allowing developers to focus on their core application logic.

## Features

- Pre-built modules for Beckn-compliant APIs
- Easy integration with existing Strapi applications
- Customizable to suit specific business requirements
- Supports various Beckn API functionalities such as search, order, and fulfillment
- Simplifies validation of requests and responses as per the Beckn specifications

## Installation

Follow these steps to add the Beckn Strapi Plugins to your project:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/beckn/strapi-plugins.git
   ```

2. **Navigate to the Plugin Directory**:

   ```bash
   cd strapi-plugins
   ```

3. **Install Dependencies**:

   Run the following command to install necessary dependencies:

   ```bash
   npm install
   ```

4. **Copy the Plugins**:

   Copy the desired plugins into your Strapi project’s `src/plugins` directory:

   ```bash
   cp -r plugins/* /path/to/your/strapi-project/src/plugins/
   ```

5. **Rebuild the Admin UI**:

   Run the following command to rebuild the admin panel:

   ```bash
   npm run build --clean
   ```

6. **Start Your Strapi Project**:

   ```bash
   npm run develop
   ```

## Configuration

Each plugin may require specific configurations. Refer to the documentation within each plugin folder for detailed setup instructions.

Typically, configuration involves:

- Adding environment variables
- Defining plugin settings in the `config/plugins.js` file

For example:

```
module.exports = {
  "beckn-bpp-adapter": {
      enabled: true,
      resolve: "path-to-your-plugin-folder",
    },
};
```

## Usage

Once installed and configured, the plugins can be accessed via the Strapi admin panel or API endpoints. Below are some common use cases:

### 1. **Beckn Search API**

Use the plugin to handle search requests in compliance with the Beckn specifications. Configure the search parameters and responses as per your platform’s requirements.

### 2. **Order Management**

Manage order creation, updates, and fulfillment through dedicated APIs provided by the plugins.

### 3. **Validation**

Automatically validate incoming and outgoing requests/responses against the Beckn protocol schema to ensure compliance.

### 4. **Customization**

Each plugin is designed to be flexible. You can customize logic, schema, and workflows to meet specific business needs.

## Available Plugins

The following plugins are included in this repository:

1. **Beckn BPP Adapter**
   - It is one of the beckn BPP's adapter. It has all the ten endpoint for an order to process.

2. **Beckn MDM**
   - Acts as an MDM for Beckn Energy. Has api like fetch customer details, dashboard data, etc.

3. **Beckn Trade BAP**
   - It is a BAP for Beckn Energy. 

4. **Beckn Trade BPP**
   - Acts like BPP especially for Beckn Energy. Has all the beckn energy bpp endpoints.

5. **Driver App**
   - Plugin for Driver Application

6. **Industry Plugin**
   - Plugin for Industry 4.0 use case

7. **Policy Api**
   - Plugin for Beckn Policy

8. **Policy Voilation**
   - Plugin for checking Beckn policy voilations

9. **PTOP Energy**
   - Plugin for enabling peer to peer energy trades

10. **Unsolicited Request Plugin**
   - Plugin to handle unsolicited request from BPP to BAP
   

## Release Notes

Below are the major releases and their highlights:

| Version  | Description                                                                                                   |
|----------|---------------------------------------------------------------------------------------------------------------|
| [v1.0.0](#v100) | Initial Release with Support for Beckn Endpoints in Commerce Workflows                                    |
| [v1.1.0](#v110) | Added Industry 4.0 Plugin for Industry 4.0                                                              |
| [v1.2.0](#v120) | Added Driver App Plugin for Mobility                                                                   |
| [v1.3.0](#v130) | Added Unsolicited Request Plugin for Handling Unsolicited Requests from BPP to BAP                      |
| [v1.4.0](#v140) | Added Policy API and Policy Violation Plugin for Beckn Policy                                          |
| [v1.5.0](#v150) | Added P2P Energy Plugin for Peer-to-Peer Energy Trade                                                  |
| [v1.6.0](#v160) | Added Beckn Trade BAP, Beckn Trade BPP, and Beckn-MDM Plugin for Beckn Energy                           |

### v1.0.0
Initial release of the Beckn Strapi Plugins. This version includes foundational support for implementing Beckn endpoints in commerce workflows, enabling businesses to integrate with the Beckn protocol seamlessly.

### v1.1.0
Introduced the Industry 4.0 plugin, allowing integration with Industry 4.0 workflows, enhancing automation and smart manufacturing processes.

### v1.2.0
Added the Driver App plugin for mobility services, enabling Beckn-compliant driver applications for managing trips and tracking.

### v1.3.0
Launched the Unsolicited Request plugin to handle unsolicited requests from BPP (Beckn Provider Platform) to BAP (Beckn Application Platform), improving system resilience.

### v1.4.0
Added the Policy API and Policy Violation plugin to facilitate the creation, enforcement, and monitoring of Beckn policies across platforms.

### v1.5.0
Introduced the P2P Energy plugin to enable peer-to-peer energy trading, supporting decentralized energy exchange networks.

### v1.6.0
Released Beckn Trade BAP, Beckn Trade BPP, and Beckn-MDM plugins to support Beckn energy implementations, including trade facilitation and master data management.

## Contributing

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

Make sure to follow the coding standards and include relevant test cases.

## License

This project is licensed under the [MIT License](LICENSE).

---

For any queries or support, please raise an issue in this repository or reach out to the Beckn team.







