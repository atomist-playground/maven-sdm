exports.helloWorld = () => ({
    intent: "hello world",
    description: "Some description",
    listener: async (ci) => {
        await ci.addressChannels("hello world");
    },
});
