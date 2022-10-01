import mongoose from "mongoose";

const favouritesModelSchema =  new mongoose.Schema({
   userId: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
   productId: {type: String}, 
   discount: {type : Number},
   domain: {type: String},
   gender: {type: String},
   image: {type: String},
   is_on_sale: {type: String},
   price : {type : Number},
   price_before_sale: {type : Number},
   product_type: {type : String},
   rating : {type : Number},
   sku: {type : String},
   title : {type : String},
   updatedAt: {type : String},
   vendor: {type : String},
   product_url: {type : String},
});
 
const favouritesModel = mongoose.models.favourites || mongoose.model("favourites", favouritesModelSchema);
export default favouritesModel;