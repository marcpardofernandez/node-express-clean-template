import { MongoOutputPort } from "./mongoOutputPort";
import { injected } from "brandi";
import { TOKENS } from "../tokens";
import { InputPort } from "./inputPort";
import { IData, Data } from "../entities/Data";

class Interactor implements InputPort {
  private mongoOutputPort: MongoOutputPort;

  constructor(mongoOutputPort: MongoOutputPort) {
    this.mongoOutputPort = mongoOutputPort;
  }

  async registerMessage(id: string, message: string): Promise<void> {
    const object: IData = new Data({id: id, message: message});
    await this.mongoOutputPort.registerMessage(object);
  }

  async countDatabaseEntries(): Promise<number> {
    return await this.mongoOutputPort.countDatabaseEntries();
  }

  async getMessages(
    id: string,
    page: number,
    pageSize: number
  ): Promise<string[]> {
    const objects: IData[] = await this.mongoOutputPort.getMessages(
      id,
      page,
      pageSize
    );
    const messages: string[] = objects.map((object) => object.message);
    return messages;
  }
}

injected(Interactor, TOKENS.mongoOutputPort);

export { Interactor };
