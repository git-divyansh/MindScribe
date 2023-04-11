import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import noteRouter from "./routes/noteRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

const PORT = process.env.PORT || 4000;
const start = async()=>{
  try{
    await connectDB("mongodb+srv://backend-notes:123qweasd@backend.b8i4s2e.mongodb.net/?retryWrites=true&w=majority");
    app.listen(4000, console.log("Server started of port 4000"));
  }
  catch(err){
    console.log(err);
  }
}
start();
// app.listen(PORT, () => {
//   await connectDB(process.env.MONGO_URI);
//   console.log(`Server is running on PORT : ${PORT}`);
// });
