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
exports.ExperienceController = void 0;
const catchAsync_1 = require("../../shared/catchAsync");
const experience_service_1 = require("./experience.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const createExperience = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.ExperienceServices.createExperience(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Experience created successfully",
        data: result,
    });
}));
const updateExperience = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield experience_service_1.ExperienceServices.updateExperience(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Experience updated successfully",
        data: result,
    });
}));
const getExperience = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield experience_service_1.ExperienceServices.getExperience(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Experience retrieved successfully",
        data: result,
    });
}));
const getAllExperiences = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.ExperienceServices.getAllExperiences();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All experiences fetched successfully",
        data: result,
    });
}));
const deleteExperience = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield experience_service_1.ExperienceServices.deleteExperience(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Experience deleted successfully",
        data: result,
    });
}));
exports.ExperienceController = {
    createExperience,
    updateExperience,
    getExperience,
    getAllExperiences,
    deleteExperience,
};
