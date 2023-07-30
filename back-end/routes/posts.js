import express from 'express';
import upload from '../multerConfig.js';
import { verifyToken } from '../middleware/auth.js';
import { createPost, getAllPosts, getUserPosts } from '../controllers/posts.js';

const router = express.Router();

// create 
router.post("/posts", verifyToken, upload.single("picture"), createPost);

// get
router.get("/posts", verifyToken, getAllPosts);
router.get("/posts/:user_id", verifyToken, getUserPosts);

// update

export default router;