import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateTodoByIds(
  userId: number,
  todoId: number,
  title?: string,
  description?: string,
  done?: boolean
) {
  const todo = await prisma?.todo?.update({
    where: {
      userId,
      id: todoId,
    },
    data: {
      title,
      description,
      done,
    },
  });
  console.log(todo);
}

updateTodoByIds(1, 1, "This is first title!");
