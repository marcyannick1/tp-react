/*
  Warnings:

  - You are about to alter the column `poids` on the `animal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `taille` on the `animal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `animal` MODIFY `poids` DOUBLE NOT NULL,
    MODIFY `taille` DOUBLE NOT NULL;
