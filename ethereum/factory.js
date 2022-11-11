import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x35eF324fFCFAB2Da4Ee4f86320Bece58F723f59D"
);

export default instance;
