const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://seulki:1234@boilerplate.vx1luhi.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!안녕안녕안ㄴ여'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))