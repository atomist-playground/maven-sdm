import {
    goal,
    slackSuccessMessage,
} from "@atomist/sdm";
import { GoalMaker } from "@atomist/sdm-core";
import { codeLine } from "@atomist/slack-messages";

export const deploy: GoalMaker = () => goal(
    { displayName: "Deploy" },
    async gi => {
        gi.progressLog.write("atm:phase=deploying");
        await gi.addressChannels(
            slackSuccessMessage(
                "Deployment",
                `Deployed Docker image\n${codeLine((gi as any).parameters.image)}`,
            ),
        );
        gi.progressLog.write("atm:phase=deployed");
    },
    {
        plan: async pli => ({
            parameters: {
                image: (pli as any).facts.image,
            },
        }),
    });
