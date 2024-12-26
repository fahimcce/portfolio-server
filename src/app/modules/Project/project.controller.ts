import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { ProjectServices } from "./project.service";
import sendResponse from "../../shared/sendResponse";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProject(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProject(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const getProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.getProject(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All projects fetched successfully",
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteProject(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const ProjectController = {
  createProject,
  updateProject,
  getProject,
  getAllProjects,
  deleteProject,
};
