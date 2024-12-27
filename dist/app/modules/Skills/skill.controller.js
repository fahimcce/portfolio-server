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
exports.SkillController = void 0;
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const skill_service_1 = require("./skill.service");
const createSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillServices.createSkill(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Skill create successfully",
        data: result,
    });
}));
const updateSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillServices.updateSkill(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Skill update successfully",
        data: result,
    });
}));
const getSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillServices.getSkill(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Skill retrive successfully",
        data: result,
    });
}));
const getAllSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillServices.getAllSkill();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All Skills fetch successfully",
        data: result,
    });
}));
const deleteSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillServices.deleteSkill(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Skill Delete successfully",
        data: result,
    });
}));
exports.SkillController = {
    createSkill,
    updateSkill,
    getSkill,
    getAllSkill,
    deleteSkill,
};
