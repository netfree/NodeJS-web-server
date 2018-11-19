const express = require('express')
const app = express()
const port = 8080

app.get('/', (request, response) => {
  response.send('Hello from Express!');
  console.log('Someone connected.\n');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})