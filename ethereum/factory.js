import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x69c230deB59e374938aE40c4A7907a2B2cfa91E7"
);

export default instance;
