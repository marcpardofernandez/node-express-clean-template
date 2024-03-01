import { Container } from "brandi";
import { TOKENS } from "./tokens";
import { Controller } from "./controllers/controller";
import { Routes } from "./routes";
import { Interactor } from "./useCases/interactor";
import { MongoGateway } from "./gateway/mongoGateway";

const container = new Container();

container
  .bind(TOKENS.mongoOutputPort)
  .toInstance(MongoGateway)
  .inSingletonScope();

container
  .bind(TOKENS.inputPort)
  .toInstance(Interactor)
  .inTransientScope();

container
  .bind(TOKENS.controller)
  .toInstance(Controller)
  .inTransientScope();

container
  .bind(TOKENS.routes)
  .toInstance(Routes)
  .inTransientScope();

export { container };
