"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/Auth/auth.routes");
const blog_routes_1 = require("../modules/Blogs/blog.routes");
const skill_routes_1 = require("../modules/Skills/skill.routes");
const experience_routes_1 = require("../modules/Experiences/experience.routes");
const project_routes_1 = require("../modules/Project/project.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/blogs",
        route: blog_routes_1.BlogRoutes,
    },
    {
        path: "/skills",
        route: skill_routes_1.SkillRoutes,
    },
    {
        path: "/experiences",
        route: experience_routes_1.ExperienceRoutes,
    },
    {
        path: "/project",
        route: project_routes_1.ProjectRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
