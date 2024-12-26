import prisma from "../../shared/prisma";

const createExperience = async (payload: any) => {
  const result = await prisma.experience.create({
    data: payload,
  });
  return result;
};

const updateExperience = async (id: string, payload: any) => {
  const result = await prisma.experience.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const getExperience = async (id: string) => {
  const result = await prisma.experience.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return result;
};

const getAllExperiences = async () => {
  const result = await prisma.experience.findMany({});
  return result;
};

const deleteExperience = async (id: string) => {
  const result = await prisma.experience.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ExperienceServices = {
  createExperience,
  updateExperience,
  getExperience,
  getAllExperiences,
  deleteExperience,
};
