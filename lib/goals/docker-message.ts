import { goal } from "@atomist/sdm";

export const dockerMessage = () => goal(
    { displayName: "Print docker image" },
    async gi => {
        await gi.addressChannels(`Seeing docker image ${(gi as any).parameters.image}`);
    },
    {
        plan: async pli => ({
            parameters: {
                image: (pli as any).facts.image,
            },
        }),
    });
