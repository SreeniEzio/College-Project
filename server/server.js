const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8080;
app.use(cors());

app.get("/", (req,res) => {
    res.send("Backend Working! You came to right place.")
})

app.get("/api/home", (req, res) => {
  res.json({ name: "CyberAakash" });
});

app.post("/api/login", (req, res) => {
  let userName = "logeshmukesh";
  let password = "logeshwaran1@";
  let body = req.body;
  if(userName == body.userName && password == body.password){
    res.json({
      message: "Logged in Successfully",
      statusCode: 200
    });
  }else{
    res.json({
      errorCode: 103,
      errorMsg: "Invalid login credential"
    });
  }
  
});

app.post("/api/signup", (req, res) => {
  let userName = "logeshmukesh";
  let body = req.body;
  if(userName === body.name){
    res.json({
      errorCode: 104,
      errorMsg: "User name already exists"
    });
  }else{
    
    res.json({
      message: "User Successfully Registered",
      statusCode: 200
    });
  }
  
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
