import mongoose from "mongoose";

const projectContactSchema = mongoose.Schema(
    {

        design: {
            type: Boolean,
            required: false,
            default: false,
        },
        development: {
            type: Boolean,
            required: false,
            default: false,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }

    },
    { timestamps: true }
);


const Project_Contact = mongoose.model("Project_Contact", projectContactSchema)

export default Project_Contact;




















