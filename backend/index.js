import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Comic } from "./models/comicModel.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello There!");
});

app.post("/comics", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.publisher ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, publisher, publishYear",
      });
    }
    const newComic = {
      title: request.body.title,
      publisher: request.body.publisher,
      publishYear: request.body.publishYear,
    };
    const comic = await Comic.create(newComic);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get("/comics", async (request, response) => {
  try {
    const comics = await Comic.find({});
    return response.status(200).json({
      count: comics.length,
      data: comics,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get("/comics/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const comic = await Comic.findById(id);
    return response.status(200).json(comic);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.put();

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
