import mongoose from "mongoose";

export const connectDb = async () => {
    try {
         const { connection } = await mongoose.connect(process.env.MONGO_URI)
         console.log(`MONGODB Connected ${connection}`)
    } catch (error) {
        console.log(`MONGODB Error `)
        process.exit(1)
    }
   
}