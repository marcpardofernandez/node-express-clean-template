import { IData } from "../entities/Data";

interface MongoOutputPort {
  countDatabaseEntries(): Promise<number>;
  registerMessage(data: IData): Promise<void>;
  getMessages(
    id: string,
    page: number,
    pageSize: number
  ): Promise<IData[]>;
}

export { MongoOutputPort };
