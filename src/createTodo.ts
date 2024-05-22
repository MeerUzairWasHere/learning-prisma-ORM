import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(title: string, description: string, userId: number) {
  await prisma?.todo?.create({
    data: {
      userId,
      title,
      description,
    },
  });
}

createTodo("This is third title!", "This is third description", 1);
