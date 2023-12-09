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

const PORT = process.env.PORT || 2000;
const URL = process.env.MONGO_URL;

const start = async()=>{ 
  try{
    await connectDB(URL);
    app.listen(PORT, console.log(`Server started of port ${PORT}`));
  }
  catch(err){ 
    console.log(err);
  }
}
start();

