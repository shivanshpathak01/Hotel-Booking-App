import express from 'express';
import Hotel from '../models/Hotel.js';
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

export const router = express.Router();

//Create 
    router.post('/',verifyAdmin, createHotel);
// Update 

router.put('/:id', verifyAdmin,updateHotel)

// Delete

router.delete('/find/:id',verifyAdmin, deleteHotel)

// Get

router.get('/:id', getHotel)

// GetAll
router.get('/', getHotels)
router.get('/countByCity', countByCity)
router.get('/countByType', getHotels)


export default router;