sdm = require("@atomist/sdm")

export HasImage = () -> sdm.goalTest(
    "Has Docker image",
    (g, pli) ->
        if g.state == sdm.SdmGoalState.success and !!g.data
            image = JSON.parse(g.data).image
            if !!image
                pli.facts = {
                    image,
                };
                return true
        return false
    )
