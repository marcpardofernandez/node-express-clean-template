import dotenv from "dotenv";

dotenv.config();

const sessionOptions = {
  secret: process.env.SECRET || "NOT_SECURE",
  cookie: { maxAge: 7200000, httpOnly: true },
  saveUninitialized: true,
  resave: false,
};

export { sessionOptions };
