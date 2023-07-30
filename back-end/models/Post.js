import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true }
)

const Post = mongoose.model("Post", PostSchema);
export default Post;
