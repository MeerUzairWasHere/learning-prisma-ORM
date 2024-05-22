import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosByUserId(userId: number) {
  const todos = await prisma?.todo?.findMany({
    where: {
      userId,
    },
  });
  console.log(todos);
  return todos;
}

getTodosByUserId(1);
