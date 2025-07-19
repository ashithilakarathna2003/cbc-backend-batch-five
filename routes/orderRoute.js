import express from "express";
import { createOrder } from "../controllers/orderController.js";
const orderRouter = express.Router();     //create a router

orderRouter.post("/",createOrder);        //save a product

export default orderRouter; //export the router to use in index
