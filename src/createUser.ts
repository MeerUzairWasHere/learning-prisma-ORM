import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  address: string,
  isVerified: boolean
) {
  await prisma?.user?.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      isVerified,
    },
  });
}

insertUser(
  "lubna123",
  "Mir",
  "Lubna",
  "LubnasSecretPassw123ord",
  "9596123123",
  "Srinagar",
  true
);
