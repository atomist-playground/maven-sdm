const sdm = require("@atomist/sdm");
const slack_messages = require("@atomist/slack-messages");

exports.deploy = () => sdm.goal(
    {displayName: "deploy"},
    async (gi) => {
        await gi.addressChannels(sdm.slackSuccessMessage(
            "Deployment",
            `Deployed Docker image\n${slack_messages.codeLine(gi.parameters.image)}`));
    },
    {
        plan: async (pli) => ({
            parameters: {
                image: pli.facts.image,
            },
        }),
    });
