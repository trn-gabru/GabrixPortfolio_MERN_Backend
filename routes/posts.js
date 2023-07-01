import express from "express";
import { getFeedPosts, } from "../controllers/posts.js";


const router = express.Router();

// READ

router.get("/", getFeedPosts);
router.get("/portfolio/posts", getFeedPosts);

// UPDATE

export default router;






















