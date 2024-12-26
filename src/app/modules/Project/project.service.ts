import prisma from "../../shared/prisma";

const createProject = async (payload: any) => {
  const result = await prisma.project.create({
    data: payload,
  });
  return result;
};

const updateProject = async (id: string, payload: any) => {
  const result = await prisma.project.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const getProject = async (id: string) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return result;
};

const getAllProjects = async () => {
  const result = await prisma.project.findMany({});
  return result;
};

const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ProjectServices = {
  createProject,
  updateProject,
  getProject,
  getAllProjects,
  deleteProject,
};
