import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL

async function dbConnect() {

    let isConnected = false;
    if(isConnected) {
        console.log("Already connected to mongodb")
        return
    }

  try {
    const db = await mongoose.connect(MONGODB_URI)
    isConnected = db.connections[0].readyState==1;
    console.log("Connected to mongodb" , db)

  } catch (error) {
    console.error("Failed to connect to mongodb:" , error)
    throw error
  }
}

export default dbConnect;
