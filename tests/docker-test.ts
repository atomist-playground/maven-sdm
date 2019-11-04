import {
    goalTest,
    SdmGoalState,
} from "@atomist/sdm";
import { PushTestMaker } from "@atomist/sdm-core";

export const HasImage: PushTestMaker = () => goalTest("Has Docker image", async (g, pli) => {
    if (g.state === SdmGoalState.success && !!g.data) {
        const image = JSON.parse(g.data).image;
        if (!!image) {
            pli.facts = {
                image,
            };
            return true;
        }
    }
    return false;
});
