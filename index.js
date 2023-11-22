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
       console.warn(result)
       res.send(result);
   } catch (error) {
       res.status(500).send({ error: error.message });
   }
});
 app.listen(5000)