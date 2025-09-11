import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMetadata: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Metadata", {
    from: deployer,
    args: [], // Metadata has no constructor params
    log: true,
    autoMine: true,
  });
};

export default deployMetadata;
deployMetadata.tags = ["Metadata"]; // ← tag so we can run it separately if we want
