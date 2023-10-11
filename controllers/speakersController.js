const { Speaker } = require('../models')

module.exports = {
    getAllSpeakers,
    getSpeakersByBrand
}

async function getAllSpeakers(req,res) {
    try{
        const speakers = await Speaker.find()
        return res.json(speakers)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}

async function getSpeakersByBrand(req, res) {
    const brand = req.params.brand; 
  
    try {
      const speakers = await Speaker.find({ brand: brand });
  
      if (speakers.length === 0) {
        return res.status(404).json({ message: 'No speakers found for the specified brand.' });
      }
  
      return res.json(speakers);
    } catch (e) {
      return res.status(500).send('Server error');
    }
  }
  
  