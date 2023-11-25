const express = require('express');
const cors = require('cors');
require('./db/config.js');
const User = require('./db/User.js');

const app = express();
app.use(express.json())
app.use(cors())
app.post("/register", async (req, res) => {
   try {
       const user = new User(req.body);
       const result = await user.save();
       result = result.toObject();
       delete result.password;
       res.send(result);
   } catch (error) {
       res.status(500).send({ error: error.message });
   }
});

app.post("/login", async (req, res) => {
    if(req.body.password && req.body.email)
    {
        const user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            res.send("no user found");
        }
    }
    else {
        res.send("no user found");
    }
       
  
 });
 app.listen(5000)