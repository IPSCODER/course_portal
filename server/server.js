import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import payment from './routes/payment.js'
import jwt from "jsonwebtoken"
import bodyParser from "body-parser";
import { data } from "./data/data.js";

const secret = "test";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
// app.use(cors({
//     origin:["http://localhost:3000/"],
//     methods:["GET","POST"], 
//     credentials: true
// }))
app.use(cors());

const PORT = process.env.PORT || 8080;

// const verifyServer = (req,res,next) =>{
//     const token = req.cookies.token;
//     if(!token){
//         return res.json({Message:"We need token please provide it!"})
//     }else{
//         jwt.verify(token,secret,(err,decoded) => {
//             if(err){
//                 return res.json({Message:"Authentication Error!"})
//             }else{
//                 req.pravin = decoded.normalize;
//                 next();
//             }
//         })
//     }
// }

// app.use("/logout",(req,res) => {
//     res.clearCookie("token");
//     res.json({Message:"Logged Out Successfully!"})
// })
app.use('/api/payment', payment);
app.get("/courses",(req,res) => {
    return res.json(data)
})

app.use("/",(req,res) => {
    return res.json({status:true,email:req.mail})
})

mongoose.connect(process.env.MONGO_URL).then(() =>{
    app.listen(PORT,() =>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(err =>{
    console.log(err,"err")
})

