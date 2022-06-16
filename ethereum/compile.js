const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// delete build folder and everything inside of it
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8");

// compile code
const output = solc.compile(source, 1).contracts;
 //create build folder
fs.ensureDirSync(buildPath);

//create 2 builds, 1 for each contract
for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(":", "") +".json"), output[contract]
    );
}
