const express = require("express")

const routes = express.Router()

const TweetController = require("./controllers/TweetController")
const LikeController = require("./controllers/LikeController")

routes.get('/tweets', TweetController.index)
routes.post('/tweets', TweetController.create)
routes.put('/tweets/:id', LikeController.like)

module.exports = routes