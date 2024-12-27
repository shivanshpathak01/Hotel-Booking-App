import express from 'express';
import Hotel from '../models/Hotel.js';
import { createHotel, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

//Create 
    router.post('/', createHotel);
// Update 

router.put('/:id', updateHotel)

// Delete

router.delete('/:id', async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted...");
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get

router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error)
    }
})

// GetAll
router.get('/', async (req, res,next) => {
    
    if(failed) return next(createError(401, 'You are not authorized'));

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err)
    }
})


export default router;