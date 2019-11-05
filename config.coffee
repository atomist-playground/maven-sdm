sdm_core = require("@atomist/sdm-core")
os = require("os")
path = require("path")

export cfg = {
    name: "@atomist/demo-sdm",
    sdm: {
        cache: {
            enabled: true,
            path: path.join(os.homedir(), ".atomist", "cache", "container"),
            store: new sdm_core.CompressingGoalCache,
        },
    },
};
