/*
  Warnings:

  - You are about to drop the `PersonalProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PersonalProject";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "category" TEXT,
    "description" TEXT NOT NULL,
    "github" TEXT,
    "live" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
