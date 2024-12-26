import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { BlogRoutes } from "../modules/Blogs/blog.routes";
import { SkillRoutes } from "../modules/Skills/skill.routes";
import { ExperienceRoutes } from "../modules/Experiences/experience.routes";
import { ProjectRoutes } from "../modules/Project/project.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
