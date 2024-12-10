import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({succes:true , data: products});
     } catch (error) {
        console.log("error in fetching products: ",error.message);
        res.status(500).json({succes : false , message: "Server Error"});
        
     }
};
export const createProduct = async(req,res) => {
    const product =  req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false,message : 'Please provide all the fields'});
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({succes:true,data : newProduct });
    }
    catch (error) {
        console.error('error in creation of product',error.message);
        res.status(500).json({succes:false , message:"server error"});
    }
};

export const updateProduct = async (req,res) => {
    const {id} = req.params;
    const product = req.body ;
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({success:false , message:"Invalid Product id"});
    }
    try {
       const updatedProduct = await Product.findByIdAndUpdate (id , product , {new:true});
       res.sta
       tus(200).json ( {success:true , data: updatedProduct});
    } catch (error) {
       res.status(500).json ( {success:false , message : "Server Error"});
    }
};

export const deleteProduct = async(req , res) => {
    const{id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({success:false , message:"Invalid Product id"});
   }
    try {
       await Product.findByIdAndDelete(id);
       res.status(200).json({succes : true, message: 'Product deleted'});
    } catch (error) {
       res.status(500).json({succes : false, message: 'Server Error'});
    }
 };
