const { Speaker } = require('../models')

module.exports = {
    getAllSpeakers,
    getSpeakersByBrand,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
};

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


  
//   async function createSpeaker(req, res) {
//     const { brand, modelName, price, bluetooth, yearModel, surroundSound, quantity, inStock, auxPort } = req.body;
  
//     try {
//       const newSpeaker = new Speaker({
//         brand,
//         modelName,
//         price,
//         bluetooth,
//         yearModel,
//         surroundSound,
//         quantity,
//         inStock,
//         auxPort,
//       });
  
//       await newSpeaker.save();
  
//       return res.status(201).json(newSpeaker);
//     } catch (e) {
//       return res.status(500).send('Server error');
//     }
//   }

async function createSpeaker(req, res) {
    try {
        const speaker = new Speaker(req.body)
        await speaker.save()
        return res.status(201).json({
            speaker
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
  


  async function updateSpeaker(req, res) {
    const speakerId = req.params.id; 
    const updateData = req.body;
  
    try {
      const updatedSpeaker = await Speaker.findByIdAndUpdate(speakerId, updateData, { new: true });
  
      if (!updatedSpeaker) {
        return res.status(404).json({ message: 'Speaker not found' });
      }
  
      return res.json(updatedSpeaker);
    } catch (e) {
      return res.status(500).send('Server error');
    }
  }
  
  async function deleteSpeaker(req, res) {
    const speakerId = req.params.id; // Assuming you pass the speaker ID as a route parameter
  
    try {
      const deletedSpeaker = await Speaker.findByIdAndRemove(speakerId);
  
      if (!deletedSpeaker) {
        return res.status(404).json({ message: 'Speaker not found' });
      }
  
      return res.json(deletedSpeaker);
    } catch (e) {
      return res.status(500).send('Server error');
    }
  }
  
  
  