// app.js
import express, { Application, query } from "express";

import { PORT } from "./secret";
import authRoute from "./routes/auth";
import { Prisma, PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./exceptions/errors-middleware";

const app: Application = express();

app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Received request: ${req.method} ${req.url}`);
//   next();
// });

app.use("/api/user", authRoute);

export const prismaClient = new PrismaClient({
  log:['query']
})
app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`Running on http://127.0.0.1:${PORT}`);
});
