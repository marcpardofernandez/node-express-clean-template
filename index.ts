import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import { sessionOptions } from "./src/session";
import { Routes } from "./src/routes";
import { TOKENS } from "./src/tokens";
import { container } from "./src/container";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
const routes: Routes = container.get(TOKENS.routes);
app.use(cors());
app.use(session(sessionOptions));
app.use(routes.getRouter());

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export { app };