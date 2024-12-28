import express from 'express';
import Hotel from '../models/Hotel.js';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

export const router = express.Router();

//Create 
    router.post('/',verifyAdmin, createHotel);
// Update 

router.put('/:id', verifyAdmin,updateHotel)

// Delete

router.delete('/:id',verifyAdmin, deleteHotel)

// Get

router.get('/:id', getHotel)

// GetAll
router.get('/', getHotels)


export default router;