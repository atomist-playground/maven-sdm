sdm = require("@atomist/sdm")
slack_messages = require("@atomist/slack-messages")

export deploy = () -> sdm.goal(
    { displayName: "Deploy" },
    (gi) ->
        gi.progressLog.write("atm:phase=deploying")
        await gi.addressChannels(sdm.slackSuccessMessage(
            "Deployment",
            """Deployed Docker image\n#{slack_messages.codeLine(gi.parameters.image)}"""))
        gi.progressLog.write("atm:phase=deployed")
    ,
        plan: (pli) ->
            parameters:
                image: pli.facts.image,
)
