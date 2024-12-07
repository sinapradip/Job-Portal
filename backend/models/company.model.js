import mongoose from "mongoose";

const companySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
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
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }

}, {timestamps: true})

export const Company = mongoose.model('Company', companySchema) // export the Company model with schema