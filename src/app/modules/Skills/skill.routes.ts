import express from "express";
import auth from "../../middlewares/auth";
import { SkillController } from "./skill.controller";

const router = express.Router();

router.post("/create-skill", auth("OWNER"), SkillController.createSkill);
router.patch("/:id", auth("OWNER"), SkillController.updateSkill);
router.get("/:id", SkillController.getSkill);
router.get("/", SkillController.getAllSkill);
router.delete("/:id", auth("OWNER"), SkillController.deleteSkill);

export const SkillRoutes = router;
