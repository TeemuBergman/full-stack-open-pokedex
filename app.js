const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

const serverStart = new Date().toISOString()

app.get('/version', (req, res) => {
  res.json({
    version: '1.0.0',
    startedAt: serverStart
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
