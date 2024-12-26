import express from "express";
import auth from "../../middlewares/auth";
import { ExperienceController } from "./experience.controller";

const router = express.Router();

router.post(
  "/create-experience",
  auth("OWNER"),
  ExperienceController.createExperience
);
router.patch("/:id", auth("OWNER"), ExperienceController.updateExperience);
router.get("/:id", ExperienceController.getExperience);
router.get("/", ExperienceController.getAllExperiences);
router.delete("/:id", auth("OWNER"), ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
