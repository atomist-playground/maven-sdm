export helloWorld = () ->
    intent: "hello world",
    description: "Some description",
    listener: (ci) ->
        await ci.addressChannels("hello world")

