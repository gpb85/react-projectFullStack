import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import usersRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
const port = process.env.PORT;
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("the server is running");
  console.log(`http://localhost: ${port}`);
});
