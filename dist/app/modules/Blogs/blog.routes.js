"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post("/create-blog", (0, auth_1.default)("OWNER"), blog_controller_1.BlogController.createBlog);
router.patch("/:id", (0, auth_1.default)("OWNER"), blog_controller_1.BlogController.updateBlog);
router.get("/:id", blog_controller_1.BlogController.getBlog);
router.get("/", blog_controller_1.BlogController.getAllBlog);
router.delete("/:id", (0, auth_1.default)("OWNER"), blog_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;
