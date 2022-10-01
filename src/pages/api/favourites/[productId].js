import { unstable_getServerSession, } from 'next-auth';
import { authOptions } from "../auth/[...nextauth].js"
import favouritesModel from "../../../dataModels/favourites.js"
import userModel from "../../../dataModels/user.js"


const favouritesHandler = async (req, res) => {

    if (req.method === "DELETE") {
        try {
            // getting the logged in user
            const result = await unstable_getServerSession(req, res, authOptions);

            // getting userID by email
            const user = await userModel.findOne({ email: result.user.email });
            if (!user) {
                return res.status(401).json({ errorMsg: "Unauthorize" });
            }
            const userID = user._id;

            // const result = await favouritesModel.findByIdAndDelete(req.query.productId);
            const deleteResponse = await favouritesModel.findOneAndDelete({userId: userID, productId: req.query.productId});
            if (!deleteResponse) {
                return res.status(400).json({ errorMsg: "Can not remove from wishlist" });
            }
            return res.status(200).json({ successMsg: "Removed from wishlist" });

        } catch (err) {
            console.log(err)
            return res.status(500).json({ errorMsg: "Server Error!" });
        }

    }


};

export default favouritesHandler;