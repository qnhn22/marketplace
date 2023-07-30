import express from 'express';
import {
    getUser,
} from "../controllers/users.js";
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// read route
router.get("/:id", verifyToken, getUser);

export default router;
