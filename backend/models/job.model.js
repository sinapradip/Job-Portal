import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String
    },
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
        required: true
    },
    numberOfOpenPosition: {
        type: Number,
        required: true
    },
    companyJobRelation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jobApplications: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }

}, {timestamps: true})

export const Job = mongoose.Schema('Job', jobSchema) // export the model with the schema