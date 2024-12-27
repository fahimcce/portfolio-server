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
exports.authServices = void 0;
const config_1 = __importDefault(require("../../config"));
const jwtHelpers_1 = require("../../helpers/jwtHelpers");
const loginUserToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(payload.email == config_1.default.email && payload.password == config_1.default.password)) {
        throw new Error("Invalid password or email,Try with valid credentials");
    }
    const accessToken = jwtHelpers_1.jwtHelpers.tokenGenerator({
        email: payload.email,
        role: "OWNER",
    }, config_1.default.jwt_access_token, config_1.default.jwt_access_expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.tokenGenerator({
        email: payload.email,
        role: "OWNER",
    }, config_1.default.jwt_refresh_token, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.authServices = {
    loginUserToDb,
};
