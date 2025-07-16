import express from "express";
import { createUser , loginUser } from "../controllers/userController.js";

const userRouter = express.Router();     //create a router

userRouter.post("/",createUser);        //save a product
userRouter.post("/login",loginUser);      //call the function create in userController

export default userRouter; //export the router to use in index