import mongoose from 'mongoose'
import User from '../models/User.js'
import Transaction from '../models/Transaction.js'

export  const getAdmins =  async(req, res)=>{
    try {
        const admins = await User.find({role:'admin'}).select('-password')
        res.status(200).json(admins) 
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}

export const getUserPerformance =  async(req, res)=>{
    try {
        
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}