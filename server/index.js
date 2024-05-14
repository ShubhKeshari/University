const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./utils/db.config");
require("dotenv").config();
const { studentsRouter } = require("./routes/students.routes");
app.use(express.json());
app.use(cors());
const port = process.env.PORT||3000;
app.use("/student", studentsRouter);
app.get("/", (req,res)=>{
    return res.status(200).json({message:"This is Home Page of server"})
})

app.listen(port,async()=>{
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});