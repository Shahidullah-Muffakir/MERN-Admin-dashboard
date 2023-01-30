

import OverallStat from "../models/OverallStat.js";

export const getSales=async(req,res)=>{
   try {
    const OverallStats=await OverallStat.find()
    res.status(200).json(OverallStat[0])

   } catch (error) {
    res.status(404).json({msg:error.message})
   }
}