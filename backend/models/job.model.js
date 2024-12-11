import mongoose from "mongoose";

const jobSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
    },
    experienceLevel: {
        type: Number,
        required: true
    },
    position: {
        type: Number
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    applications: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    },
    // companyId: {
    //     type: String
    // },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Correct field for referencing Company
    

}, {timestamps: true})

export const Job = mongoose.model('Job', jobSchema) // export Job model with the schema