const { Speaker } = require('../models')

module.exports = {
    getAllSpeakers
}

async function getAllSpeakers(req,res) {
    try{
        const speakers = await Speaker.find()
        return res.json(speakers)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}