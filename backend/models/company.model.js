import mongoose from 'mongoose'

const companySchema = mongoose.Schema({

    companyName: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    logo: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {timestamps: true})

export const Company = mongoose.model('Company', companySchema) // export the Company model with schema