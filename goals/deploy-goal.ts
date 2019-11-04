import {
    goal,
    slackSuccessMessage,
} from "@atomist/sdm";
import { codeLine } from "@atomist/slack-messages";

export const deploy = () => goal(
    { displayName: "Deploy" },
    async gi => {
        await gi.addressChannels(
            slackSuccessMessage(
                "Deployment",
                `Deploying docker image ${codeLine((gi as any).parameters.image)}`,
            ),
        );
    },
    {
        plan: async pli => ({
            parameters: {
                image: (pli as any).facts.image,
            },
        }),
    });
