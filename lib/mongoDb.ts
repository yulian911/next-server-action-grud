import mongoose from 'mongoose'

const connectDb = async () => {

  if(mongoose.connections[0].readyState){
    console.log('MongoDB is already conected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGO_URL as string) 
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default connectDb