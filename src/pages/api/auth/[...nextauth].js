import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';
import connectMongoDB from "../config/mongoDB.Config.js"
import userModel from "../../../dataModels/user.js"

connectMongoDB();

export const authOptions = {
    //Configure JWT
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {

                const result = await userModel.findOne({
                    email: credentials.email,
                });
                //Not found - send error res
                if (!result) {
                    throw new Error('No user found with the email');
                }
                //Check hased password with DB password
                const checkPassword = await compare(credentials.password, result.password);
                //Incorrect password - send response
                if (!checkPassword) {
                    throw new Error('Password doesnt match');
                }
                //Else send success response
                return { email: result.email };
            },
        }),
    ],
}


export default NextAuth(authOptions);