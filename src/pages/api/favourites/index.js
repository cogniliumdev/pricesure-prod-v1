import { unstable_getServerSession, } from 'next-auth';
import { authOptions } from "../auth/[...nextauth].js"
import favouritesModel from "../../../dataModels/favourites.js"
import userModel from "../../../dataModels/user.js"


const favouritesHandler = async (req, res) => {
    if (req.method === "POST") {
        try {
            // getting the logged in user
            const result = await unstable_getServerSession(req, res, authOptions);

            // getting userID by email
            const user = await userModel.findOne({ email: result.user.email });
            if (!user) {
                return res.status(401).json({ errorMsg: "Unauthorize" });
            }
            const userID = user._id;

            // if product already exist is DB
            if (await favouritesModel.findOne({ userId: userID, productId: req.body.product._id || req.body.product.id })) {
                return res.status(400).json({ errorMsg: "Already added to wishlist" });
            }

            // creating product document 
            const product = new favouritesModel({
                ...req.body.product.fields,
                userId: userID,
                productId: req.body.product.id
            });
            const data = await product.save();
            console.log(data);

            return res.status(200).json({ successMsg: "Added to wishlist" });
        
        } catch (err) {
            console.log(err)
            return res.status(500).json({ errorMsg: "Server Error!" });
        }

    }

    if (req.method === "GET") {
        try {
            // getting the logged in user
            const result = await unstable_getServerSession(req, res, authOptions);

            // getting userID by email
            const user = await userModel.findOne({ email: result.user.email });
            if (!user) {
                return res.status(401).json({ errorMsg: "Unauthorize" });
            }
            const userID = user._id;

            // getting all wishlist products 
            const response = await favouritesModel.find({ userId: userID });

            return res.status(200).send(response);

        } catch (err) {
            console.log(err);
            return res.status(500).json({ errorMsg: "Server Error!" });
        }
    }
};

export default favouritesHandler;