import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import upload from "./multerConfig.js";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { users, posts } from "./data/index.js"
import User from "./models/User.js";
import Post from "./models/Post.js";

// configuration
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* routes with files */
// middleware is functions that we run before endpoints are hit
app.post("/auth/register", upload.single("picture"), register);

// routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// mongoose setup
const PORT = process.env.PORT || 6001
const MONGODB = process.env.MONGO_URL

mongoose.connect(MONGODB)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Listening to port ' + PORT);
        })
    })
    .catch((err) => {
        console.log('Error: ' + err);
    })

