import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

async function getTodosAndUserDetails(userId: number) {
  const data = await prisma?.todo?.findMany({
    where: {
      userId,
    },
    select: {
      title: true,
      description: true,
      done: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  console.log(data);
  return data;
}

getTodosAndUserDetails(1);
