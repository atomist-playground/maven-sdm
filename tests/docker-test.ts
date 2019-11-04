import {
    goalTest,
    SdmGoalState,
} from "@atomist/sdm";

export const is_docker_build = () => goalTest("Is docker build", async (g, pli) => {
    if (g.name === "docker-build" && g.state === SdmGoalState.success && !!g.data) {
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
