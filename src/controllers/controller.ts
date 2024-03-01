import fs from "fs";
import { Request, Response } from "express";
import { injected } from "brandi";
import { TOKENS } from "../tokens";

import dotenv from "dotenv";
import { InputPort } from "../useCases/inputPort";

dotenv.config();

class Controller {
  private useCases: InputPort;

  constructor(useCases: InputPort) {
    this.useCases = useCases;
  }

  async information(req: Request, res: Response): Promise<void> {
    try {
      console.log(`/`);
      const dbElements: number = await this.useCases.countDatabaseEntries();
      res.send(
        `Welcome to Spanish Home Finder Server. \n` +
          `Your session id is ${req.sessionID}. \n` +
          `Database elements: ${dbElements}.`
      );
    } catch (error) {
      let errorMessage = "Unknwon Error";
      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(error);
      res.status(500).send("Error: " + errorMessage);
    }
  }

  async registerMessage(req: Request, res: Response): Promise<void> {
    try {
      console.log(`/message`);
      const id: string = req.sessionID;
      const message: string = req.body.message;
      await this.useCases.registerMessage(id, message);
      res.status(200).send();
    } catch (error) {
      let errorMessage = "Unknwon Error";
      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(error);
      res.status(500).send("Error: " + errorMessage);
    }
  }

  async getMessages(req: Request, res: Response): Promise<void> {
    try {
      console.log(`/message`);
      const id: string = req.sessionID;
      const { page = 1, pageSize = 3 } = req.query as {
        page?: number;
        pageSize?: number;
      };
      const messages: string[] = await this.useCases.getMessages(
        id,
        page,
        pageSize
      );
      res.status(200).send(messages);
    } catch (error) {
      let errorMessage = "Unknwon Error";
      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(error);
      res.status(500).send("Error: " + errorMessage);
    }
  }
}

injected(Controller, TOKENS.inputPort);

export { Controller };
