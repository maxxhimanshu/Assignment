const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;

const quizSchema = new mongoose.Schema(
    {

        description: {
            type: String,
            required: true,

        },

        option1: {
            OptionName:{
                type: String,
                required: true
            },
            isCorrect:{
                type:Boolean
            }
        },
        option2: {
            OptionName:{
                type: String,
                required: true
            },
            isCorrect:{
                type:Boolean
            }
        },
         option3: {
            OptionName:{
                type: String,
                required: true
            },
            isCorrect:{
                type:Boolean
            }
        },
         option4: {
            OptionName:{
                type: String,
                required: true
            },
            isCorrect:{
                type:Boolean
            }
        },
       QuestionType:{
            type: String,
            required: true,
            enum:["single", "multiple"]
       },
          QuestionLevel:{
            type: Number,
       },
        urlCode: {
            type: String,
            required: true,  
        }
    }

)

module.exports = mongoose.model("Quiz", quizSchema)