import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())

let users = [
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
    {
        username: 'ronaldo', 
        avatar: "https://fogo.com" 
    }
]

let tweets = [
    {
	username: "bobesponja",
    tweet: "eu amo o hub"
    },
    {
	username: "ronaldo",
    tweet: "ronaldo"
    }
]

function createUser(username, avatar){
    users.push({
        username: username,
        avatar: avatar
    })
}

function createTweet(username, tweet){
    tweets.push({
        username: username,
        tweet: tweet
    })
}

server.get('/tweets', (req, res) => {
    const getTweets = tweets.map((tweet) => {

        let getUser = users.find(user => user.username == tweet.username)

        return (
        {username: tweet.username,
        tweet: tweet.tweet,
        avatar: getUser.avatar}
        )
    }
    )

    res.send(getTweets)
})

server.listen(5000)