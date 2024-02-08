import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateComics from "./pages/CreateComics";
import DeleteComic from "./pages/DeleteComic";
import EditComic from "./pages/EditComic";
import ShowComic from "./pages/ShowComic";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comics/create" element={<CreateComics />} />
      <Route path="/comics/details/:id" element={<ShowComic />} />
      <Route path="/comics/edit/:id" element={<EditComic />} />
      <Route path="/comics/delete/:id" element={<DeleteComic />} />
    </Routes>
  );
};

export default App;
