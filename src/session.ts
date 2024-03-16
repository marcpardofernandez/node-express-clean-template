import MongoStore from "connect-mongo";
import { mongoRepository } from "./repository/mongoRepository";
import dotenv from "dotenv";

dotenv.config();

const sessionOptions = {
  secret: process.env.SECRET || "NOT_SECURE",
  cookie: { maxAge: 7200000, httpOnly: true },
  saveUninitialized: true,
  resave: false,
  store: MongoStore.create({
    clientPromise: mongoRepository.getConection(),
  }),
};

export { sessionOptions };
