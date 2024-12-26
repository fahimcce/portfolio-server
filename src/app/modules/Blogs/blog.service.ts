import prisma from "../../shared/prisma";

const createBlog = async (payload: any) => {
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};
const updateBlog = async (id: string, payload: any) => {
  const result = await prisma.blog.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const getBlog = async (id: string) => {
  const result = await prisma.blog.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return result;
};

const getAllBlog = async () => {
  const result = await prisma.blog.findMany({});
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BlogServices = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
};
