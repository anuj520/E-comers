import  express  from "express";
import { signUpRouter } from "./router/authRouter";
import { connectDB } from "./controller/DATABASE/db";
import { contectRouter } from "./router/contectRouter";
import { middleware } from "./middleware/error-middleware";
import cors from "cors"
import { AdminRouter } from "./router/admin-router";

const app = express();

const corsOption = {
    origin : "http://localhost:5173",
    methods : "GET , POST , PUT, ,DELETE , PATCH , HEAD",
    credentials: true
    }
    
    app.use(cors (corsOption))

app.use(express.json())

// SignIn.Up,logun
app.use('/api/auth',signUpRouter)
// contect
app.use('/contect/from',contectRouter)

//admin//
app.use('/api/admin',AdminRouter)
app.get('/', (req,res) =>{
res.status(200).send('<h1>Hello Express tuja khatem kerke jata ho tera baap ker ma I comming node js<h1>')
})
app.use(middleware)
const PORT = '5000'
connectDB().then(()=>{
app.listen(PORT,() =>{
 console.log(`Server Run in PORT ${PORT}`)   
})
})