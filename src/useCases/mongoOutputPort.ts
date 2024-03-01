import { MongoObject } from "../entities/mongoObject";

interface MongoOutputPort {
  countDatabaseEntries(): Promise<number>;
  registerMessage(data: MongoObject): Promise<void>;
  getMessages(
    id: string,
    page: number,
    pageSize: number
  ): Promise<MongoObject[]>;
}

export { MongoOutputPort };
