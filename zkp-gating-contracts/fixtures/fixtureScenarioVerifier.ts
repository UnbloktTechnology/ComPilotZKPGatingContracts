import { deployments } from "hardhat";

import { deployScenarioVerifier } from "../lib/deploy/deployScenarioVerifier";
import { Address } from "@nexeraid/nexera-id-zkp-gating-contracts-sdk/lib";

export async function fixtureScenarioVerifier() {
  const contractName = "ScenarioVerifierFactory";
  await deployments.fixture([
    contractName,
    "CredentialAtomicQuerySigV2Validator",
  ]);
  const scenarioVerifier = await deployScenarioVerifier();

  return {
    scenarioVerifier: scenarioVerifier,
    validatorAddress: (
      await deployments.get("CredentialAtomicQuerySigV2Validator")
    ).address as Address,
  };
}
