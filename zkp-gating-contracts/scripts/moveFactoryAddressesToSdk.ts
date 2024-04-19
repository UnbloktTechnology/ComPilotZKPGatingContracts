import fs from "fs";

import { saveFactoryAddresses } from "./saveTsFiles";

export const moveFactoryAddressToSdk = (
  factoryName: string,
  network: string
) => {
  // Load the JSON file
  const jsonFile = `./deployments/${network}/${factoryName}.json`; // Replace with your JSON file's path
  const rawData = fs.readFileSync(jsonFile);
  const jsonData = JSON.parse(rawData);
  const address = jsonData.address;
  saveFactoryAddresses(factoryName, network, address);
};

export const moveAllFactoryAddressesToSdk = () => {
  // Amoy
  moveFactoryAddressToSdk("VerifierEntrypointFactory", "amoy_dev");
  moveFactoryAddressToSdk("VerifierEntrypointFactory", "amoy_staging");
  moveFactoryAddressToSdk("VerifierEntrypointFactory", "amoy_prod");
  moveFactoryAddressToSdk("ScenarioVerifierFactory", "amoy_dev");
  moveFactoryAddressToSdk("ScenarioVerifierFactory", "amoy_staging");
  moveFactoryAddressToSdk("ScenarioVerifierFactory", "amoy_prod");
  // Sepolia
  moveFactoryAddressToSdk("VerifierEntrypointFactory", "sepolia_dev");
  moveFactoryAddressToSdk("VerifierEntrypointFactory", "sepolia_staging");
  moveFactoryAddressToSdk("VerifierEntrypointFactory", "sepolia_prod");
  moveFactoryAddressToSdk("ScenarioVerifierFactory", "sepolia_dev");
  moveFactoryAddressToSdk("ScenarioVerifierFactory", "sepolia_staging");
  moveFactoryAddressToSdk("ScenarioVerifierFactory", "sepolia_prod");
};
moveAllFactoryAddressesToSdk();
