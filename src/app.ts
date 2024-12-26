import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
// import globalErrorHandler from "./app/middlewares/globalErrorHandler";
// import notFound from "./app/middlewares/notFound";
// import router from "./app/routes";

const app: Application = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hey ! You are Entering the server....Be careFull..");
});

app.use("/api", router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
