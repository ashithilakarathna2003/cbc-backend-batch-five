import express from "express";
import { getProducts,saveProduct,deleteProduct } from "../controllers/productController.js";

const productRouter = express.Router();     //create a router

productRouter.get("/",getProducts);             //get all product

productRouter.post("/",saveProduct);        //save a product

productRouter.delete("/:productId", deleteProduct);        //delete a product

export default productRouter; //export the router to use in index