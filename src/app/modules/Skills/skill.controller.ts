import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.createSkill(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill create successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.updateSkill(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill update successfully",
    data: result,
  });
});

const getSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.getSkill(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill retrive successfully",
    data: result,
  });
});

const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getAllSkill();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All Skills fetch successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.deleteSkill(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill Delete successfully",
    data: result,
  });
});

export const SkillController = {
  createSkill,
  updateSkill,
  getSkill,
  getAllSkill,
  deleteSkill,
};
