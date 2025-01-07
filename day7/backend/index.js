//server creation
var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");
var User = require("./models/users");
app.use(express.json())
const PORT = 3001;
//mongodb string=mongodb://localhost:27017/
//mongodb string =mongodb://127.0.1:27017/
mdb
  .connect("mongodb://localhost:27017/kec")
  .then(() => {
    console.log("mongodb connection established successfully..");
  })
  .catch(() => {
    console.log("check your connection string...");
  });

app.get("/", (req, res) => {
  res.json({
    server: "welcome to backend server..",
    url: "localhost",
    PORT: { PORT },
  });
});
app.get("/json", (req, res) => {
  res.json({
    server: "welcome to json backend server..",
    url: "localhost",
    PORT: { PORT },
  });
});
app.get("/static", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "/index.html"));
});



app.post("/signup", (req, res) => {
  //   console.log(req.body);
  // var {firstName,lastName,email,password} = req.body;
  // console.log(firstName,lastName,email);
  // try {
  //   var newUser=new User({
  //       firstName:firstName,
  //       lastName:lastName,
  //       email:email,
  //       password:password
  // });
  var newUser=new User(req.body)
  console.log(req.body);
  newUser.save();
    console.log("User addedd successfully..");
    res.status(200).send("User add successfully...");
  // } catch (err) {
  //   console.log(err);
  // }
});


app.get('/getSignup',async(req,res)=>{
    try{
      var allSignupRecords= await User.find();
      res.json(allSignupRecords);
      console.log("fetched items successfully..");
    }
    catch(err){
        console.log(err);
       }
})
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
          return res.status(400).json({ message: "User not found", isLoggedIn: false });
      }
      if (existingUser.password!=password) {
          return res.status(400).json({ message: "Invalid password", isLoggedIn: false });
      }
      res.json({ message: "Login Successful", isLoggedIn: true });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isLoggedIn: false });
  }
});
app.listen(PORT, () => {
  console.log(`Backend server started...\nUrl:http://localhost:${PORT}`);
});
