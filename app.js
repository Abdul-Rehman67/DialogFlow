const express = require('express')
const bodyParser = require('body-parser');
const order = require('./src/routes/user')
const dotEnv = require('dotenv')
dotEnv.config()


const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json());



//base route
app.get('/', (req, res) => {
  res.send('Hello From DialogFlow')
})

//order check route 
app.use('/order', order)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})