import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import comicRoute from "./routes/comicRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello There!");
});

app.use("/comics", comicRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Hello there Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
