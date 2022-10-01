import userModel from '../../../dataModels/user.js';
import { hash } from 'bcryptjs';
import connectMongoDB from "../config/mongoDB.Config.js"

connectMongoDB();

async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { email, password, firstName, lastName } = req.body;

            // validation 
            if (!email || !email.includes('@') || !password || !firstName) {
                return res.status(400).json({ errorMsg: 'all fields are required' });
            }

            // check if email already exisit
            if (await userModel.findOne({ email: email })) {
                return res.status(400).json({ errorMsg: "Email already exist" });
            }

            const newUser = new userModel({
                firstName: firstName,
                lastName: lastName,
                email: email, 
                password: await hash(password, 12)
            });
            await newUser.save();
            return res.status(201).json({ successMsg: "Registered Successfully" });
        }
        else {
            //Response for other than POST method
            res.status(500).json({ message: 'Route not valid' });
        }

    } catch (err) {
        console.log("ERROR OCCOURED", err)
        return res.status(500).json({ errorMsg: "server error" });
    }

}
export default handler;
