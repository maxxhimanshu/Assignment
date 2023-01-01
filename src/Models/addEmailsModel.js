const mongoose = require("mongoose")
// const ObjectId = mongoose.Schema.Types.ObjectId;

const emailSchema = new mongoose.Schema(
    {

        email: {
            type: String,
            required: true,  
        },
        // urlCodeId: {
        //     type: ObjectId,
        //     required: true,  
        //     ref: "Url"
        // },
        urlCode: {
            type: String,
            required: true,
           
            lowercase: true,
            trim: true
        },
    }

)

module.exports = mongoose.model("Emails", emailSchema)