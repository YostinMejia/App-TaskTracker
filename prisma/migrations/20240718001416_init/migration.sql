/*
  Warnings:

  - You are about to drop the column `fechaCreacion` on the `Tarea` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tarea" DROP COLUMN "fechaCreacion",
ADD COLUMN     "fechaInicializacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
