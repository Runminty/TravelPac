const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/news/:countrycode', (req, res) => {
    let countrycode = req.params.countrycode
  request
    .get(`https://newsapi.org/v2/top-headlines?country=${countrycode}&apiKey=a69ce1ba8a8140899cc4a71f99b2a81c`)
    .end((err, result) => {
      // console.log (result.body[1][0])
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.articles)
      }
    })
  
})

module.exports = router


