const { Headphone } = require('../models')

module.exports = {
    getAllHeadphones
}

async function getAllHeadphones(req,res) {
    try{
        const headphones = await Headphone.find()
        return res.json(headphones)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

