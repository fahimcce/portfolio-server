import express from "express";
import auth from "../../middlewares/auth";
import { BlogController } from "./blog.controller";

const router = express.Router();

router.post("/create-blog", auth("OWNER"), BlogController.createBlog);
router.patch("/:id", auth("OWNER"), BlogController.updateBlog);
router.get("/:id", BlogController.getBlog);
router.get("/", BlogController.getAllBlog);
router.delete("/:id", auth("OWNER"), BlogController.deleteBlog);

export const BlogRoutes = router;
