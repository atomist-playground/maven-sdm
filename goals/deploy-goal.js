const sdm = require("@atomist/sdm");
const sdm_core = require("@atomist/sdm-core");
const slack_messages = require("@atomist/slack-messages");

// exports.autofix = () => new sdm.Autofix().withTransform();

exports.tag = (s, params) => new sdm_core.Tag().with({ goalExecutor: sdm_core.executeTag(params) });

exports.deploy = (s, params) => sdm.goal(
    {displayName: "deploy"},
    async (gi) => {
        await gi.addressChannels(sdm.slackSuccessMessage(
            "Deployment",
            `Deployed Docker image\n${slack_messages.codeLine(gi.parameters.image)}\nto environment ${slack_messages.italic(params.environment)}`));
    },
    {
        plan: async (pli) => ({
            parameters: {
                image: pli.facts.image,
            },
        }),
    });
