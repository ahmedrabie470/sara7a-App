const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const mongoose = require('mongoose')

app.use('/users',require('./apis/user.api'))
app.use('/msgs',require('./apis/message.api'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
mongoose.connect('mongodb+srv://ahmed55:Ahmed123@atlascluster.cbnjc2d.mongodb.net/sara7a2')