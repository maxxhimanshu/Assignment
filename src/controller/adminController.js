const shortId = require("shortid")
const urlModel=require("../Models/urlModel")
const quizModel = require("../Models/quizModel")
const addEmailsModel = require("../Models/addEmailsModel")
const userResponseModel = require("../Models/userResponseModel")

const quizLink = async function (req, res) {
    try {
        let {quizName}=req.body
        const urlCode = shortId.generate()
        const data={
            urlCode,
            quizName
        }

        const genratedUrlCode = await urlModel.create(data)
        res.status(201).send({ status: true, data: genratedUrlCode })


    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

const questions=async function(req, res) {
    
     try {
        const {urlId} = req.body
        const count=await quizModel.find({urlId}).count()
       
        if(count==10)return res.status(400).send({status: "false",message:"10 questions already added"})
        req.body["QuestionLevel"]=count+1
        const data = await quizModel.create(req.body)
        res.status(201).send({ status: true, data })
    
    }catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

const addEmails=async function(req, res) {
    
    try {
        const {email}=req.body

        const validateEmail=await addEmailsModel.findOne({email})

        if(validateEmail)return res.status(400).send({status:false,message:"User Email Already Added"})

       const data = await addEmailsModel.create(req.body)
       res.status(201).send({ status: true, data })

    }catch (error) {
       res.status(500).send({ status: false, message: error.message })
   }
}
const getAllUsers = async function(req, res) {

    try {
      
       const data = await addEmailsModel.find()
       res.status(201).send({ status: true, data })

    }catch (error) {
       res.status(500).send({ status: false, message: error.message })
   }

}
const getResponce = async function(req, res) {

    try {
        const email=req.params.email 
        const data = await userResponseModel.findOne({email})
        res.status(201).send({ status: true, data })
 
     }catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }


}
module.exports = {
    quizLink,
    questions,
    addEmails,
    getAllUsers,
    getResponce
}

