-- AlterTable
ALTER TABLE "users" ALTER COLUMN "provider" DROP NOT NULL,
ALTER COLUMN "oauth_id" DROP NOT NULL;
