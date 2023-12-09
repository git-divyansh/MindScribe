import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const letsConnect = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//     });
//     console.log(`MongoDB is connected`);
//   } catch (err) {
//     console.log(`MongoDB Error : ${err.message}`);
//     process.exit();
//   }
// };

const connectDB = async (url) =>{
  try{
    const connect = await mongoose.connect(url);
    console.log("Db connected successfully!");
    return connect;
  }
  catch(err){
    console.log(err);
  }
}

export default connectDB; 