-- DropForeignKey
ALTER TABLE `animal` DROP FOREIGN KEY `Animal_cabinetId_fkey`;

-- AlterTable
ALTER TABLE `animal` MODIFY `cabinetId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_cabinetId_fkey` FOREIGN KEY (`cabinetId`) REFERENCES `Cabinet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
