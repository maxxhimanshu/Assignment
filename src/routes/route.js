const express =require("express")
const router = express.Router()

const adminController=require("../controller/adminController")
const userController = require("../controller/userController")
const loginController = require("../controller/loginController")



router.post("/admin/quiz",adminController.quizLink)
router.post("/admin/questions",adminController.questions)
router.post("/admin/emails",adminController.addEmails)


router.post("/register",loginController.createUser)
router.post("/login",loginController.login)


router.get("/user/:urlCode/:email",userController.verify)
router.get("/user/show/:urlCode/:QuestionLevel",userController.showQuestions)

router.post("/user/response",userController.response)


module.exports = router