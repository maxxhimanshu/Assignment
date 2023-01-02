const responseModel = require("../Models/userResponseModel")


const quizModel = require("../Models/quizModel");
const addEmailsModel = require("../Models/addEmailsModel");

const verify = async (req, res) => {
    const urlCode = req.params.urlCode
    const email = req.params.email

    const data = await addEmailsModel.findOne({ email,urlCode})

    if (!data) return res.status(403).send({ status: false, message: "You are not allowed to access this" })
    return res.status(200).send({ status: true })

}

const showQuestions = async function (req, res) {
    try {
        const urlCode = req.params.urlCode
        const QuestionLevel = req.params.QuestionLevel
        console.log(urlCode,QuestionLevel)
        const question = await quizModel.findOne({ urlCode, QuestionLevel })
        res.status(200).send({ status: true, message: question })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

const response = async function (req, res) {
    try {
        let netMarks = 0;
        for (let a of req.attemptedQuestions) {
            netMarks += a.currentMarks;
        }
        req["netMarks"] = netMarks;
        const userData = await responseModel.create(data)
        res.status(201).send({ status: true, data: userData })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = {
    response,

    verify, showQuestions
}