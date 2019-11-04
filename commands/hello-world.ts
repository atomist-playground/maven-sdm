import { CommandHandlerRegistration } from "@atomist/sdm";

export const helloWorld: () => Omit<CommandHandlerRegistration, "name"> = () => ({
    intent: "hello world",
    description: "Some description",
    listener: async ci => {
        await ci.addressChannels("hello world");
    },
});
