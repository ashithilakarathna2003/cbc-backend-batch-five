import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import jwt from "jsonwebtoken";
import orderRouter from './routes/orderRoute.js';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();  //create a server
app.use(cors());
app.use(bodyParser.json()); // use this parser for json more clean output


app.use(
    (req,res,next)=>{
        const tokenString = req.header("Authorization")
        if(tokenString != null){
            const token = tokenString.replace("Bearer ","")
          //  console.log(token);

            jwt.verify(token, process.env.JWT_KEY,
                 (err, decoded) => {
                if(decoded != null){
                    req.user = decoded;
                    next();
                }else{
                    console.log("Invalid token");
                    res.status(403).json({
                        message : "Invalid token"
                    })
                }
                
            })
        }
        else{
            next();
        }

        
        //next(); //next fumction is used for passing the request to the next middleware
    }
)

mongoose.connect(process.env.MONGODB_URL) //connect to the database
.then(() => {
    console.log("Connected to database")
})
.catch(() => {
    console.log("Connection failed")
})


//mongodb+srv://admin:123@cluster0.jrkfmn6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.use("/api/products", productRouter) //route is the products now
app.use("/api/users", userRouter)   //route is the users now
app.use("/api/orders",orderRouter) //route is the orders now



app.listen(3000, () => {
    console.log('Server is running on port 3000');  // port config and reply message

});