import parser from 'body-parser'
import db from 'diskdb'
import express from 'express'
import path from 'path'

const HIGH_SCORE_KEYS = [
  'name',
  'score'
]
const PORT = 3000

/**
 * validates the body of a post request to high scores
 */
const validate = body => {
  if (!body) throw new Error('body')

  for (const key of HIGH_SCORE_KEYS) {
    if (!body[key]) throw new Error(key)
  }

  return true
}


/**
 * connect to the database
 */
db.connect(__dirname, ['high-scores'])

const app = express()

app.use(parser.json())
app.use(parser.urlencoded({
  extended: true
}))

// Add headers
app.use(function (req, res, next) {

  // Allow CORS
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  
  // Pass to next layer of middleware
  next()
})


/**
 * return a list of high scores
 */
app.get('/high-scores', (req, res) => {
  try {
    const result = db['high-scores'].find()
    res.header('Access-Control-Allow-Origin', "*")
    return res.send(result)
  } catch (error) {
    res.send(error)
  }
})

/**
 * creates a single highscore
 */
app.post('/high-scores', (req, res) => {
  try {
    //validate(req.body)
    const result = db['high-scores'].save(req.body)
    return res.send(result)
  } catch (error) {
    return res.send(error)
  }
})

/**
 * serves up the api to get and post leaderboard
 */
app.listen(
  PORT,
  error => {
    if (error) return console.error(`There was an error: `, error)

    return console.info(`Server up and listening on ${PORT}`)
  }
)

/**
 * create a simple way to server index.html on localhost:3001
 */
const app2 = express()
const staticPath = path.join(__dirname, '../')
app2.use(express.static(staticPath))

app2.listen(3001, function () {
  console.log('Serving site on 3001')
})
