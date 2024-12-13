import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js"

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if(!jobId) {
            return res.status(400).json({
                message: "Job ID is required",
                success: false
            })
        }

        // check if user has already applied to a job or not
        const existingApplicatin = await Application.findOne({job:jobId, applicant: userId})

        if(existingApplicatin) {
            return res.status(400).json({
                message: "You have already applied to this job",
                success: false
            })
        }

        // check if the job exist or not
        const job = await Job.findById(jobId)
        if(!job) {
            return res.status(400).json({
                message: "Job not found"
            })
        }

        // create a application

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })
        
        job.applications.push(newApplication._id);
        job.save();
        return res.status(201).json({
            message: "Job applied successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: "job",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "company",
                options: {sort: {createdAt: -1}}
            }
        })

        if(!application) {
            return res.status(400).json({
                message: "Application not found",
                success: false
            })
        }

        return res.status(200).json({
            application,
            success: true
        })


    } catch (error) {
        console.log(error.message)
    }
}

// For admin to see applicant in a job
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "applicant"
            }
        })

        if(!job) {
            return res.status(400).json({
                message: "Job not found"
            })
        }

        return res.status(200).json({
            job,
            success: true
        })

    } catch (error) {
        console.log(error.message)
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
 
        if(!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false
            })
        }

        // find application by application id
        const application = await Application.findOne({ _id: applicationId })
        if(!application) {
            return res.status(400).json({
                message: "Application not found",
                success: false
            })
        }

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully",
            success: true,
            application
        })

    } catch (error) {
        console.log(error.message)
    }
}