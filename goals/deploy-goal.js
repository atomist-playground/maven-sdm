const sdm = require("@atomist/sdm");
const slack_messages = require("@atomist/slack-messages");

exports.deploy = () => sdm.goal(
    {displayName: "Deploy"},
    async (gi) => {
        gi.progressLog.write("atm:phase=deploying");
        await gi.addressChannels(sdm.slackSuccessMessage(
            "Deployment",
            `Deployed Docker image\n${slack_messages.codeLine(gi.parameters.image)}`));
        gi.progressLog.write("atm:phase=deployed");
    },
    {
        plan: async (pli) => ({
            parameters: {
                image: pli.facts.image,
            },
        }),
    });
