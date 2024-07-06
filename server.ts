import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(bodyParser.json());

app.post("/submit", async (req: Request, res: Response) => {
  const { name, email, course } = req.body;
  try {
    const formData = await prisma.formData.create({
      data: {
        name: name,
        email: email,
        course: course,
      },
    });
    res.status(201).json(formData);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
