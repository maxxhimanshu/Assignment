const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema(
    {
        urlCode: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        quizName: {
            type: String,
            required: true,
            
        }
    }

)

module.exports = mongoose.model("Url", urlSchema)