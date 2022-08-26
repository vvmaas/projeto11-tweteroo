import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json())

let users = []

let tweets = []


server.post('/sign-up', (req,res) => {

    console.log(req.body)
    
    users.push(req.body)

    console.log("post user")

    res.send("OK")
})

server.post('/tweets', (req,res) => {
    
    tweets.push(req.body)

    console.log("post tweet")

    res.send("OK")
})

server.get('/tweets', (req, res) => {
    const getTweets = tweets.map((tweet) => {

        console.log(users)
        console.log(tweets)

        let getUser = users.find(user => user.username == tweet.username)

        return (
        {username: tweet.username,
        tweet: tweet.tweet,
        avatar: getUser.avatar}
        )
    }
    )

    let lastTen = getTweets

    lastTen = lastTen.reverse()

    lastTen = lastTen.slice(0,9)

    res.send(lastTen)
})

server.listen(5000)