const sdm = require("@atomist/sdm");
const _ = require("lodash");

exports.HasImage = () => sdm.goalTest(
    "Has Docker image",
    async (g, pli) => {
        if (g.name === "docker-build" &&
            g.state === sdm.SdmGoalState.success &&
            !!_.get(g, "push.after.images[0].imageName")) {
            const image = _.get(g, "push.after.images[0].imageName");
            if (!!image) {
                pli.facts = {
                    image,
                };
                return true;
            }
        }
        return false;
    });
