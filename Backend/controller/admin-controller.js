import { password } from "bun";
import { User } from "../model/auth-model";
import { Contect } from "../model/contect-model";
import { set } from "mongoose";

const getAlluser = async(req,res,) =>{
    try {
    const users = await User.find({},{password:0})
    if (!users||users.length == 0) {
        res.status(500).json({msg:'NO user found'})
    }
    res.status(200).json(users)        

    } catch (error) {
     console.log("get All user",error);
        
    }
}

const updateUserId = async(req,res) => {
    try {
        const id = req.params.id;
        const User_Data = await User.findOne({_id:id},{password:0})

        res.status(200).json(User_Data)
    } catch (error) {
        console.log("get All userId",error);
    }
}

const updateUser = async(req,res) =>{
    try {
        const id = req.params.id;
        const userData = req.body;

        const upDate = await User.updateOne({_id:id},{
            $set:userData
        })
        res.status(200).json(upDate)
    } catch (error) {
        console.log(error);
        
    }
}

const userDelete = async(req,res) =>{
    try {
        const id = req.params.id;
       await User.deleteOne({_id:id})
        res.status(200).json({msg:"User Delete Sucessful"})  
    } catch (error) {
        console.log("get All userId",error);
    }
}

const getContectAdd = async(req,res) =>{
    try {
        const contectMessage = await Contect.find();
        if (!contectMessage || contectMessage.length == 0) {
            res.status(404).json('message empaty')
        }
       res.status(200).json(contectMessage)
    } catch (error) {
        console.log(error);
        
    }
}

const deleteMessage = async(req,res) =>{
    try {
        const id = req.params.id;
        await Contect.deleteOne({_id:id})
        res.status(200).json({msg:"message Delete Sucessful"})  
    } catch (error) {
        console.log(error);
        
    }
}
export{getAlluser,updateUserId,userDelete,updateUser,getContectAdd,deleteMessage}