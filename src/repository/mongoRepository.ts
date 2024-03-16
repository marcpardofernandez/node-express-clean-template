import mongoose, { Model } from "mongoose";
import dotenv from "dotenv";
import { MongoOutputPort } from "../useCases/mongoOutputPort";
import { MongoObject } from "../entities/mongoObject";
import { mongoSchema } from "./mongoSchema";
import { MongoClient } from "mongodb";

dotenv.config();

class mongoRepository implements MongoOutputPort {
  private static connected: boolean = false;

  constructor() {
    if (!mongoRepository.connected) {
      mongoRepository.connect();
    }
    process.on("exit", () => {
      mongoRepository.disconnect();
    });
  }

  async getMessages(
    id: string,
    page: number,
    pageSize: number
  ): Promise<MongoObject[]> {
    const response: MongoObject[] = await mongoose
      .model<MongoObject>("Data", mongoSchema)
      .find({ id: id }, { _id: 0 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return response;
  }

  async countDatabaseEntries(): Promise<number> {
    return await mongoose
      .model<MongoObject>("Data", mongoSchema)
      .countDocuments();
  }

  async registerMessage(data: MongoObject): Promise<void> {
    const RequestModel: Model<MongoObject> = mongoose.model<MongoObject>(
      "Data",
      mongoSchema
    );
    await RequestModel.create({
      id: data.id,
      message: data.message,
    });
  }

  private static async connect(): Promise<void> {
    try {
      const databaseUrl = process.env.MONGODB_URI;
      if (!databaseUrl) {
        throw new Error("MongoDB connection URL not found in the .env file");
      }
      await mongoose.connect(databaseUrl);
      mongoRepository.connected = true;
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  private static async disconnect(): Promise<void> {
    await mongoose.disconnect();
    mongoRepository.connected = false;
    console.log("Disconnected from MongoDB.");
  }

  static async getConection(): Promise<MongoClient> {
    if (!mongoRepository.connected) {
      await mongoRepository.connect();
    }
    return mongoose.connection.getClient();
  }
}

export { mongoRepository };