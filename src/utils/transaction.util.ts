import prisma from '../config/db';
import type { Prisma } from '@prisma/client'; // 👈 이걸 써야 함!

/**
 * Prisma 트랜잭션 유틸 함수
 * @param callback 트랜잭션 안에서 수행할 비즈니스 로직
 */
export async function runTransaction<T>(
  callback: (tx: Prisma.TransactionClient) => Promise<T>
): Promise<T> {
  return await prisma.$transaction(async (tx) => {
    return await callback(tx);
  });
}
