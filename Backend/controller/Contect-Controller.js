import { Contect } from "../model/contect-model";

const contecController = async(req,res) =>{
    try {
        const response = req.body
        await Contect.create(response)
        res.status(200).json({msg: "message send sucessfuly"})
    } catch (error) {     
     res.status(404).json({msg: "message not delivered"})
     console.log(error);
     
        
    }
}
export{contecController}