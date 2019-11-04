"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sdm_core_1 = require("@atomist/sdm-core");
var os = require("os");
var path = require("path");
exports.cfg = {
    name: "@atomist/demo-sdm",
    logging: {
        callsite: true,
    },
    sdm: {
        cache: {
            enabled: true,
            path: path.join(os.homedir(), ".atomist", "cache", "container"),
            store: new sdm_core_1.CompressingGoalCache(),
        },
    },
};
