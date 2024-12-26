import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { BlogServices } from "./blog.service";
import sendResponse from "../../shared/sendResponse";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.createBlog(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog create successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlog(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog update successfully",
    data: result,
  });
});

const getBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.getBlog(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog retrive successfully",
    data: result,
  });
});

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlog();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All Blogs fetch successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.deleteBlog(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog Delete successfully",
    data: result,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
};
