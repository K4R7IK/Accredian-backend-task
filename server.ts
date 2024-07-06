import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(
  cors({
    origin: "https://accredian-refer.netlify.app",
  }),
);
app.use(bodyParser.json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running" });
});

app.post("/submit", async (req: Request, res: Response) => {
  const { name, email, course } = req.body;
  try {
    const formData = await prisma.formData.create({
      data: {
        name,
        email,
        course,
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
