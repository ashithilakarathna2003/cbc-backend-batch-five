import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
const orderRouter = express.Router();     //create a router

orderRouter.post("/",createOrder);        //save a product

orderRouter.get("/",getOrders);        //get a product

export default orderRouter; //export the router to use in index
