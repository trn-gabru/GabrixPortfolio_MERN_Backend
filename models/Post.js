import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
            default: "",
        },
        category: {
            type: String,
            enum: ['Web Development', 'Graphic Design'],
            required: true,
        },
        subCategory: {
            type: String,
            enum: ['logo', 'business card', 'brochure', 'vector arts', '3folds', 'brand identity', 'social media post']
        },
        image: {
            type: String,
            // contentType: String,
        },
    },
    { timestamps: true }
);


const Post = mongoose.model("Post", postSchema)

export default Post;




















