/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Postre` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Postre` table. All the data in the column will be lost.
  - Made the column `descripcion` on table `Postre` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Postre" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "descripcion" SET NOT NULL;
