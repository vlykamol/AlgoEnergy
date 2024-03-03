
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require("jsonwebtoken");



const userSchema = require('../schemas/user')
const user = require('../schemas/user')





module.exports = {
  createUser : (req, res) => {
    const body = req.body
    const user = new userSchema({
      email : body.email,
      password : bcrypt.hashSync(body.password, salt)
    })

    user.save().then(data => {
      console.log('user created', data)
      res.json(data)
    }).catch(err => {
      console.log('error at creating user', err)
      res.status(401).json({ error: "error while signing up" });
    })
  },

  login : (req, res) => {
    const body = req.body
    const {email, password} = body

    user.findOne({email : email}).then(data => {
      const userPassword = data.password
      if (bcrypt.compareSync(password, userPassword)) {
        console.log("user logged in", data._id);
        const user = {
          _id: data._id
        };
        const payload = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);
        res.json({ accessToken: payload, 
          email: data.email });
        return;
      }
      res.status(400).json({ message: "please check password" });
    }).catch((err) => {
      console.log("error while login", err);
      res.status(500).json({ error: "error while login" });
    });
  }
}