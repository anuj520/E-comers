import { User } from "../model/auth-model";
const home = async(req,res) =>{
try {
    res.status(200).send({msg: 'server run'})
} catch (error) {
    console.log('internal server error ',error);
    res.status(404).json('Bad status')
}
}
const SignUpRouter = async(req,res) =>{
    try {
        console.log(req.body)

        const{username,email,password,phone,isAdmin} = req.body;

        const userExits = await User.findOne({email});

        if (userExits) {
            res.status(500).json({msg: 'User already Exits'})
        }
            const userCreated = await User.create({username,email,password,phone,isAdmin})
          res.status(200).json({msg: "SignUp Sucessfuly",
            token: await userCreated.genrateToken(),
            userId: await userCreated._id.toString()
          })
        
           
    } catch (error) {
        console.log(error);
        
    }
}
const loginRouter = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const userExists = await User.findOne({ email:email });

        if (!userExists) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        const isMatch = await userExists.comparePassword(password);
        if (isMatch) {
          res.status(200).json({msg:'login sucessful',
            token:await userExists.genrateToken(),
            userId:userExists._id.toString()
          }) 

        }else{
            res.status(500).json({msg:'Invalid email or password'})  
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

const user = (req,res) =>{
    try {
const userData = req.user;
console.log(userData);
return res.status(200).json({userData})

    } catch (error) {
        console.log(error);
        
    }
} 

export{home,SignUpRouter,loginRouter,user}