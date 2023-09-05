import express from 'express';
import upload from '../multerConfig.js';
import { verifyToken } from '../middleware/auth.js';
import { createPost, getAllPosts, getUserPosts } from '../controllers/posts.js';

const router = express.Router();

// create 
router.post("/posts", verifyToken, upload.single("picture"), createPost);

// get
router.get("/", verifyToken, getAllPosts);
router.get("/:user_id/posts", verifyToken, getUserPosts);

// update

export default router;