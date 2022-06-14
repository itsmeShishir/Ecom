const express = require('express')
const app = express()

app.get('/', function (req, res) {
  return res.send('hello,me')
})

app.listen(3000, function () {
  console.log('Server started on port 3000')
})
