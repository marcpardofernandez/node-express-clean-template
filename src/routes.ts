import { Router, Request, Response } from "express";
import { injected } from "brandi";
import { TOKENS } from "./tokens";
import { Controller } from "./controllers/controller";

class Routes {
  private router: Router;
  private controller: Controller;

  constructor(controller: Controller) {
    this.router = Router();
    this.controller = controller;
    this.setupRouter();
  }

  private setupRouter(): void {
    this.router.get("/", async (req: Request, res: Response): Promise<void> => {
      await this.controller.information(req, res);
    });

    this.router.post(
      "/message",
      async (req: Request, res: Response): Promise<void> => {
        await this.controller.registerMessage(req, res);
      }
    );

    this.router.get(
      "/messages",
      async (req: Request, res: Response): Promise<void> => {
        await this.controller.getMessages(req, res);
      }
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

injected(Routes, TOKENS.controller);

export { Routes };
