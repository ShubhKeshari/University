const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());
const port = process.env.PORT||3000;

app.get("/", (req,res)=>{
    return res.status(200).json({message:"This is Home Page of server"})
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});