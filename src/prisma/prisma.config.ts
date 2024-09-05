import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["error", "error", "info", "warn"],
});

export { prisma };
