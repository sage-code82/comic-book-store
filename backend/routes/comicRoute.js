import express from "express";
import { Comic } from "../models/comicModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
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
    return response.status(201).send(comic);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
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

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const comic = await Comic.findById(id);
    return response.status(200).json(comic);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
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
    const { id } = request.params;
    const result = await Comic.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Comic not found" });
    }
    return response.status(200).send({ message: "Comic updated" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Comic not found" });
    }
    return response.status(200).send({ message: "Comic deleted" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
