// db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('✅ DB Connected');
  } catch (err) {
    console.error('❌ DB Connection Error', err);
    process.exit(1);
  }
};

export default prisma;
