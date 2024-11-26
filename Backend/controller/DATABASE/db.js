import { connect } from "bun";
import mongoose from "mongoose";

const URI = "mongodb+srv://erroreagle790:8057892261@cluster0.ijgid.mongodb.net/E-comers?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async() =>{
   try {
    await mongoose.connect(URI)
    console.log('DataBase connect');
   } catch (error) {
    console.log('database connection failed');
   process.exit(0)
   } 
}
export{connectDB}