const express = require("express")
const { TravelModel } = require("../model/travel.model")

const travelRouter = express.Router()


travelRouter.post('/post', async (req, res) => {
    try {
        const newEntry = new TravelModel(req.body);
        await newEntry.save();
        res.status(201).json({ message: 'Entry added successfully' });
    } catch (error) {
        console.error('Error posting data:', error);
        res.status(500).json({ message:error.message });
    }
});
  
travelRouter.get('/retrieve', async (req, res) => {
    try {
        const entries = await TravelModel.find();
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message:error.message });
    }
});
  
travelRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await TravelModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Entry deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    travelRouter
}