const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/country/:countrycode', (req, res) => {
    let countrycode = req.params.countrycode
  request
    .get(`http://api.worldbank.org/v2/country/${countrycode}/?format=json`)
    .end((err, result) => {
      // console.log (result.body[1][0])
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body[1][0])
      }
    })
  
})

module.exports = router



