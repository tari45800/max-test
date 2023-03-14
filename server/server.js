const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.send('멍꿀멍꿀')
})

app.get('/cat', (req, res) => {
  res.send('냥꿀냥꿀')
})

app.listen(port, () => {
  console.log(`아니뭔데 ${port}`)
})