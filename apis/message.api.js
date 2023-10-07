const { auth } = require('../middleware/authentecation/auth')
const { addMsg, allMsgs } = require('../services/message.service')

const app = require('express').Router()

app.post('/',addMsg)
app.get('/',auth,allMsgs)




module.exports=app