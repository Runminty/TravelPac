const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/nanz/countries', (req, res) => {
  request
    .get(`http://api.worldbank.org/v2/country/?format=json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
