import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); //form bata data auda
//url bata data auda
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
const app = express(); //method ko through bata aucha express ko sabaii

app.on("error", (error) => {
  console.log("ERRRORRR  : ", error);
  throw error;
});
export { app };
