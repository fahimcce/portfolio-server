import prisma from "../../shared/prisma";

const createSkill = async (payload: any) => {
  const result = await prisma.skill.create({
    data: payload,
  });
  return result;
};
const updateSkill = async (id: string, payload: any) => {
  const result = await prisma.skill.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const getSkill = async (id: string) => {
  const result = await prisma.skill.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return result;
};

const getAllSkill = async () => {
  const result = await prisma.skill.findMany({});
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await prisma.skill.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SkillServices = {
  createSkill,
  updateSkill,
  getSkill,
  getAllSkill,
  deleteSkill,
};
