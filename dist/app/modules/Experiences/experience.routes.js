"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const experience_controller_1 = require("./experience.controller");
const router = express_1.default.Router();
router.post("/create-experience", (0, auth_1.default)("OWNER"), experience_controller_1.ExperienceController.createExperience);
router.patch("/:id", (0, auth_1.default)("OWNER"), experience_controller_1.ExperienceController.updateExperience);
router.get("/:id", experience_controller_1.ExperienceController.getExperience);
router.get("/", experience_controller_1.ExperienceController.getAllExperiences);
router.delete("/:id", (0, auth_1.default)("OWNER"), experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
