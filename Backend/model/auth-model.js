import  bcryptjs from "bcryptjs"
import {Schema,model} from "mongoose";
import jwt from "jsonwebtoken"
const SignUPSchema = new Schema ({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
})
//? secue password with the bcrypt
SignUPSchema.pre('save',async function(next){
    const user = this;
    if(!user.isModified('password')){ // ya check kertha ha ki password change nahi hua ha yo phela se he bcrypt ha
        next()
    }
  try {
    const saltRound = await bcryptjs.genSalt(10);
    const hash_password = await bcryptjs.hash(user.password,saltRound)
    user.password = hash_password;
  } catch (error) {
    next(error)
  }
})

//json web token
SignUPSchema.methods.genrateToken = async function(){
    try {
        return jwt.sign(
            {
                userId:this._id.String,
                email:this.email,
                isAdmin:this.isAdmin
            },
          process.env.TOKEN ,
          {
            expiresIn :'30d'
          }
        )
    } catch (error) {
        console.log(error);
        
    }
}

//comparePassword
SignUPSchema.methods.comparePassword = async function (password){
    console.log("this",this);
    return await bcryptjs.compare(password,this.password)

}
  

const User = new model('User',SignUPSchema)
export{User}