import { Configuration } from "@atomist/automation-client";
import { CompressingGoalCache } from "@atomist/sdm-core";
import * as os from "os";
import * as path from "path";

export const cfg: Configuration = {
    name: "@atomist/demo-sdm",
    logging: {
        callsite: true,
    },
    sdm: {
        cache: {
            enabled: true,
            path: path.join(os.homedir(), ".atomist", "cache", "container"),
            store: new CompressingGoalCache(),
        },
    },
};
