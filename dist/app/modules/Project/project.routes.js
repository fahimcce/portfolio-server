"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.post("/create-project", (0, auth_1.default)("OWNER"), project_controller_1.ProjectController.createProject);
router.patch("/:id", (0, auth_1.default)("OWNER"), project_controller_1.ProjectController.updateProject);
router.get("/:id", project_controller_1.ProjectController.getProject);
router.get("/", project_controller_1.ProjectController.getAllProjects);
router.delete("/:id", (0, auth_1.default)("OWNER"), project_controller_1.ProjectController.deleteProject);
exports.ProjectRoutes = router;
