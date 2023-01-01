const loginModel = require("../Models/loginModel")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const createUser = async function (req, res) {
    try {
        const {password,email}=req.body

        const validateEmail=await loginModel.findOne({email})

        if(validateEmail)return res.status(400).send({status:false,message:"User Email Already Exist"})

        const salt = bcrypt.genSaltSync(10);
        const encryptPassword = bcrypt.hashSync(password, salt);
        req.body.password=encryptPassword

        const user = await loginModel.create(req.body)
        
        res.status(201).json({status:true,data:user})
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

const login=async function (req, res) {

    try {
        let email = req.body.email
        let password = req.body.password 

        if (!email || !password) return res.status(400).send({ status: false, msg: "Provide the email and password to login." })  

       

        let user = await loginModel.findOne({ email: email })  
        if (!user.email) return res.status(401).send({ status: false, msg: "Email is incorrect." }) 

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).send({ status: false, message: "password is incorrect" })
        let token = jwt.sign(  // --> to generate the jwt token
        {
            userId: user._id.toString(),                            // --> payload
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2),     // --> expiry set for 2 hours
            iat: Math.floor(Date.now() / 1000)
        },
        "Assignment-of the day"                             // --> secret key
    )
    let data = {
        userId: user._id,
        token: token
    }
    res.status(201).send({ status: true, data: data })
    } catch (e) {
        res.status(500).json({ error: e })
    }

}

module.exports = {
  
    createUser,
    login
 
}