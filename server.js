const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const headphoneController = require('./controllers/headphonesController')

const PORT = process.env.PORT || 3001

//middleware goes in this section woooo
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//pathways go here

app.get('/', (req,res) => res.send('The root of the stereo department'))
app.get('/headphones', headphoneController.getAllHeadphones)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))