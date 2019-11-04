import { CommandMaker } from "@atomist/sdm-core";

export const helloWorld: CommandMaker = () => ({
    intent: "hello world",
    description: "Some description",
    listener: async ci => {
        await ci.addressChannels("hello world");
    },
});
