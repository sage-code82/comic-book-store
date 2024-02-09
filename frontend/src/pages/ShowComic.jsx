import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowComic = () => {
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/comics/${id}`)
      .then((response) => {
        setComic(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Comic</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-500">Id</span>
            <span>{comic._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-500">Title</span>
            <span>{comic.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-slate-500">Publisher</span>
            <span>{comic.publisher}</span>
            <div className="my-4">
              <span className="text-xl mr-4 text-slate-500">
                Publisher Year
              </span>
              <span>{comic.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-slate-500">Create Time</span>
              <span>{new Date(comic.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-slate-500">Last Update</span>
              <span>{new Date(comic.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowComic;
