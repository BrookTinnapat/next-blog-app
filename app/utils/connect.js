import { PrismaClient } from "@prisma/client";

// Check if the global object already has a PrismaClient instance
const globalForPrisma = globalThis;

// Use the existing PrismaClient instance if available, otherwise create a new one
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
