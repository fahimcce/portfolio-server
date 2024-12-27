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
exports.SkillServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createSkill = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.create({
        data: payload,
    });
    return result;
});
const updateSkill = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
});
const getSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.findUniqueOrThrow({
        where: {
            id: id,
        },
    });
    return result;
});
const getAllSkill = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.findMany({});
    return result;
});
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.skill.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.SkillServices = {
    createSkill,
    updateSkill,
    getSkill,
    getAllSkill,
    deleteSkill,
};
