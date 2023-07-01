import mongoose from "mongoose";

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        title: "MTD social media post",
        description: "MTD post for social media",
        category: "graphic design",
        subCategory: "social media post",
        picturePath: "mtd000.jpg",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "MTD social media post",
        description: "MTD post for social media",
        category: "graphic design",
        subCategory: "social media post",
        picturePath: "mtd001.jpg",
    },

]