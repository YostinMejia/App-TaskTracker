/*
  Warnings:

  - You are about to drop the column `creada` on the `Tarea` table. All the data in the column will be lost.
  - Added the required column `fechaFinalizacion` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tarea" DROP COLUMN "creada",
ADD COLUMN     "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fechaFinalizacion" TIMESTAMP(3) NOT NULL;
