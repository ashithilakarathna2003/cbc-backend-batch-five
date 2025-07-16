import mongoose from "mongoose";     //import mongoose

const productSchema = mongoose.Schema(  //create a schema
    {          
    productId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    altNames : [
        {
            type : String
        }
    ],
    description : {
        type : String,
        required : true
    },
    images : [
        {
            type : String
        }
    ],
    labelledPrice : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    isAvailable : {
        type : Boolean,
        required : true,
        default : true
    },
}
);

const Product = mongoose.model("products", productSchema);  //create a model

export default Product;