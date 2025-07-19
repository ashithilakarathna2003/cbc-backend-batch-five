import express from "express";
import { getProducts,saveProduct,deleteProduct, updateProduct , getProductById } from "../controllers/productController.js";
import { get } from "mongoose";

const productRouter = express.Router();     //create a router

productRouter.get("/",getProducts);             //get all product

productRouter.post("/",saveProduct);        //save a product

productRouter.delete("/:productId", deleteProduct);        //delete a product

productRouter.put("/:productId", updateProduct);        //update a product

productRouter.get("/:productId", getProductById);        //get a product

export default productRouter; //export the router to use in index