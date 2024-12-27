"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.post("/create-skill", (0, auth_1.default)("OWNER"), skill_controller_1.SkillController.createSkill);
router.patch("/:id", (0, auth_1.default)("OWNER"), skill_controller_1.SkillController.updateSkill);
router.get("/:id", skill_controller_1.SkillController.getSkill);
router.get("/", skill_controller_1.SkillController.getAllSkill);
router.delete("/:id", (0, auth_1.default)("OWNER"), skill_controller_1.SkillController.deleteSkill);
exports.SkillRoutes = router;
