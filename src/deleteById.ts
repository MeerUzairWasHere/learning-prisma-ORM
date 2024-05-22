import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteById(id: number) {
  await prisma?.user?.delete({
    where: {
      id,
    },
  });
}

deleteById(9);

// you need to specify this in schema that onDelete:Cascade
// it means anything that refers to this user that data will get deleted also
