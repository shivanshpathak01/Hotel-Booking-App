import Room from '../models/Room.js';
import { createError } from '../utils/error.js';
import Hotel from '../models/Hotel.js';

export const createRoom = async (req, res, next) => {
    
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Room.findByIdAndUpdate(RoomId, { $push: { rooms: savedRoom._id } });
        } catch (error) {
            next(error)    
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error)
    }
}   


export const updateRoom = async (req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error)
    }
}


export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Room.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });
            res.status(200).json("Room has been deleted...");
        } catch (error) {
            next(error)    
        }
    } catch (err) {
        next(err)
    }
}

export const getRoom = async (req, res) => {
        try {
            const room = await Room.findById(req.params.id);
            res.status(200).json(room);
        } catch (error) {
        next(err)
    }
}
export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err)
    }
}