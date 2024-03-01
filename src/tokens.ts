import { token } from "brandi";
import { Routes } from "./routes";
import { MongoOutputPort } from "./useCases/mongoOutputPort";
import { Controller } from "./controllers/controller";
import { InputPort } from "./useCases/inputPort";

const TOKENS = {
  routes: token<Routes>("routes"),
  controller: token<Controller>("controller"),
  inputPort: token<InputPort>("inputPort"),
  mongoOutputPort: token<MongoOutputPort>("mongoOutputPort"),
};

export { TOKENS };
