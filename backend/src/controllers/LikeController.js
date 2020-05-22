const Tweet = require("../models/Tweet")

module.exports = {
    async like(req, res){
        const liked = await Tweet.findById(req.params.id)

        liked.set({ like : liked.like + 1 })

        await liked.save()

        req.io.emit("like", liked)

        return res.json(liked)
    }
}