const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors')
const passport = require('./passportMiddleware')
const db = require('./models')
const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use(express.static(`${__dirname}/build`))

// Embedded Image Links can't be Authorised with JWT
// app.use('/uploads', passport.authenticate('jwt', {session:false}), express.static(`${__dirname}/public/uploads`))
app.use('/uploads', express.static(`${__dirname}/public/uploads`))

const login = require('./login')(passport)
app.use('/', login)

const Offers = require('./Offers')
app.use('/api', passport.authenticate('jwt', {session:false}), Offers)

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
})
