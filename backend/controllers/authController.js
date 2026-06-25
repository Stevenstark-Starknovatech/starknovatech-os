const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req,res)=>{
  const {name,email,password,role} = req.body;

  const hashedPassword =
    await bcrypt.hash(password,10);

  await pool.query(
   `INSERT INTO users
(name,email,password,role)
VALUES($1,$2,$3,$4)`,
   [name,email,hashedPassword,role]
  );

  res.json({
    message:"User Created"
  });
};

const login = async (req,res)=>{
  const {email,password} = req.body;

  const user = await pool.query(
   "SELECT * FROM users WHERE email=$1",
   [email]
  );

  if(user.rows.length===0){
    return res.status(400).send("No user");
  }

  const valid =
   await bcrypt.compare(
    password,
    user.rows[0].password
   );

  if(!valid){
   return res.status(400).send("Wrong password");
  }

  const token = jwt.sign(
   {
    id:user.rows[0].id,
    role:user.rows[0].role
   },
   "starksecret"
  );

  res.json({
   token,
   role:user.rows[0].role
  });
};

module.exports = {
 register,
 login
};