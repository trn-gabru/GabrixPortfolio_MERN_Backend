import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
    {

        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
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


const Feedback = mongoose.model("Feedback", feedbackSchema)

export default Feedback;




















