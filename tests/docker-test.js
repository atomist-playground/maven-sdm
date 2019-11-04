const sdm = require("@atomist/sdm");

exports.HasImage = () => sdm.goalTest(
    "Has Docker image",
    async (g, pli) => {
        if (g.state === sdm.SdmGoalState.success && !!g.data) {
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
