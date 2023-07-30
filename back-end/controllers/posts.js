import Post from "../models/Post.js";
import User from "../models/User.js";

// create
export const createPost = async (req, res) => {
    try {
        const { userId, title, category, price, description, image } = req.body;
        const user = User.findById(userId);
        const newPost = new Post({
            userId,
            title,
            category,
            price,
            description,
            image,
        })
        await newPost.save();
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

// read
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const posts = Post.find({ useId: userId })
        res.status(201).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// update

// delete
