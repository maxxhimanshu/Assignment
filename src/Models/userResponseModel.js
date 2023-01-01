const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;

const responseSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            required: true,
            ref: "Login"
        },

        urlCode: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        attemptedQuestions: {
            type: [{
                questionId: {
                    type: ObjectId,
                },
                isCorrect: {
                    type: Boolean
                },
                currentMarks: {
                    type: Number
                }

            }],
        },
        netMarks: {
            type: Number
        }

    }

)

module.exports = mongoose.model("Responses", responseSchema)

