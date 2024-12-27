"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const catchAsync_1 = require("../../shared/catchAsync");
const project_service_1 = require("./project.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const createProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectServices.createProject(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Project created successfully",
        data: result,
    });
}));
const updateProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.updateProject(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Project updated successfully",
        data: result,
    });
}));
const getProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.getProject(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Project retrieved successfully",
        data: result,
    });
}));
const getAllProjects = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectServices.getAllProjects();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All projects fetched successfully",
        data: result,
    });
}));
const deleteProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.deleteProject(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted successfully",
        data: result,
    });
}));
exports.ProjectController = {
    createProject,
    updateProject,
    getProject,
    getAllProjects,
    deleteProject,
};
