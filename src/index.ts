import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes/user.router.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", router);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
