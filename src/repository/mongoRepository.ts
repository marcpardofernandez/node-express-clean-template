import mongoose, { Model } from "mongoose";
import dotenv from "dotenv";
import { MongoOutputPort } from "../useCases/mongoOutputPort";
import { IData, Data } from "../entities/Data";

dotenv.config();

class mongoRepository implements MongoOutputPort {
  constructor() {
    this.connect();
    process.on("exit", () => {
      this.disconnect();
    });
  }

  async getMessages(
    id: string,
    page: number,
    pageSize: number
  ): Promise<IData[]> {
    const response: IData[] = await Data
      .find({ id: id }, { _id: 0 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return response;
  }

  async countDatabaseEntries(): Promise<number> {
    return await Data
      .countDocuments();
  }

  async registerMessage(data: IData): Promise<void> {
    await data.save();
  }

  private async connect(): Promise<void> {
    try {
      const databaseUrl = process.env.MONGODB_URI;
      if (!databaseUrl) {
        throw new Error("MongoDB connection URL not found in the .env file");
      }
      await mongoose.connect(databaseUrl);
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  private async disconnect(): Promise<void> {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

export { mongoRepository };
