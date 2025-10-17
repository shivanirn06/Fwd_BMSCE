const User = require("../models/user");

exports.registerUser = async (req, res) => {
try{
  const {username,email,password}=req.body;
  const olduser=await User.findOne({email});
  if(olduser) return res.status(400).send("User already exists...Please login");



  const user=await User.create({username,email,password});
  console.log("user saved:",user);
  res.send(`User ${username} saved successfully!`);
  res.redirect("/main_page");
}
catch(err){
  console.error(err);
  res.status(500).send("Error saving user");
}
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
const user = await User.findOne({ username });
if (!user) return res.status(404).send("User not found");
if (user.password !== password) return res.status(401).send("Incorrect password");
res.redirect("/main_page");
  } catch (err) {
    console.error(err);
    res.status(500).send("Login error");
  }
};


