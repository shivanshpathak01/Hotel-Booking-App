import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("You are authenticated")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("You are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin, You are logged in and you can delete any account")
// })

// Update 

router.put('/:id',verifyUser, updateUser)

// Delete

router.delete('/:id',verifyUser, deleteUser)

// Get

router.get('/:id', verifyUser ,getUser)

// GetAll
router.get('/', verifyAdmin, getUsers)


export default router;