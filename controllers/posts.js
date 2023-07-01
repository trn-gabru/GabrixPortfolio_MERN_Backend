import Post from "../models/Post.js";




// CREATE 

export const createPost = async (req, res) => {
    try {

        const { title, description, category, subCategory, picturePath } = req.body;
        const newPost = new Post({
            title: title,
            category: category,
            subCategory: subCategory,
            description: description,
            picturePath,
        })

        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);


    } catch (err) {
        res.status(409).json({ message: err.message });

    }
}




// READ

export const getFeedPosts = async (req, res) => {
    try {

        const post = await Post.find();
        res.status(200).json(post);



    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}












