const sdm_core = require("@atomist/sdm-core");
const os = require("os");
const path = require("path");

exports.cfg = {
    name: "@atomist/demo-sdm",
    sdm: {
        cache: {
            enabled: true,
            path: path.join(os.homedir(), ".atomist", "cache", "container"),
            store: new sdm_core.CompressingGoalCache(),
        },
    },
};
