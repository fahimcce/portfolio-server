import express from "express";
import auth from "../../middlewares/auth";
import { ProjectController } from "./project.controller";

const router = express.Router();

router.post("/create-project", auth("OWNER"), ProjectController.createProject);
router.patch("/:id", auth("OWNER"), ProjectController.updateProject);
router.get("/:id", ProjectController.getProject);
router.get("/", ProjectController.getAllProjects);
router.delete("/:id", auth("OWNER"), ProjectController.deleteProject);

export const ProjectRoutes = router;
