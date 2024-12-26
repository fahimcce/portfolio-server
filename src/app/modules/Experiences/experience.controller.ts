import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { ExperienceServices } from "./experience.service";
import sendResponse from "../../shared/sendResponse";

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.createExperience(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Experience created successfully",
    data: result,
  });
});

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceServices.updateExperience(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Experience updated successfully",
    data: result,
  });
});

const getExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceServices.getExperience(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Experience retrieved successfully",
    data: result,
  });
});

const getAllExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.getAllExperiences();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All experiences fetched successfully",
    data: result,
  });
});

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceServices.deleteExperience(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Experience deleted successfully",
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  updateExperience,
  getExperience,
  getAllExperiences,
  deleteExperience,
};
