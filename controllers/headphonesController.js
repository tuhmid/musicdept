const { Headphone } = require('../models')

module.exports = {
    getAllHeadphones,
    getByBrand,
}

async function getAllHeadphones(req,res) {
    try{
        const headphones = await Headphone.find()
        return res.json(headphones)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function getByBrand (req,res){
    try{
        const brand = req.params.brand
        const headphone = await Headphone.find({Brand: brand})
        console.log(headphone)
        if (headphone){
            return res.json(headphone)
        }
    } catch (e) {
        return res.status(400).send('brand not found')
    }
}

