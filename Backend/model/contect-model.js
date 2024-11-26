
import {Schema,model} from "mongoose"

const contectSchema = new Schema({
 email:{
        type:String,
        required:true,
    },
  username:{
        type:String,
        required:true,
    },
   message:{
        type:String,
        required:true,
    }
})
const Contect = new model('Contect',contectSchema)
export{Contect}