import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Working");
});

app.post("/api/v1/users", async (req: Request, res: Response) => {
  const {
    username,
    password,
    firstName,
    isVerified,
    lastName,
    phoneNumber,
    address,
  } = req.body;
  const user = await prisma?.user?.create({
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

  res.status(200).json({ msg: "User created!", user });
});

const PORT = process.env.PORT || 5000;

app.use("*", (req: Request, res: Response) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
