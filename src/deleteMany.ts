import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function deleteById(id: number) {
  await prisma?.user?.deleteMany({
    where: {
      id: {
        not: id,
      },
    },
  });
}

deleteById(1);
