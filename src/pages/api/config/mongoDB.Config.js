import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/priceSureApp", {
        // await mongoose.connect("mongodb+srv://saad:cIgiAfhpwXhmyFlw@saadcluster.v97ui.mongodb.net/?retryWrites=true&w=majority", {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database connected successfully");
    }
    catch (err) {
        console.log("ERROR OCCURED WHILE CONNECTING DATABASE", err);
    }
}
export default connectMongoDB;