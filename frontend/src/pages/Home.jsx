import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/comics")
      .then((response) => {
        setComics(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Comics Library</h1>
        <Link to="/comics/create">
          <MdOutlineAddBox className="text-slate-300 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-700 rounded-md">No</th>
              <th className="border border-slate-700 rounded-md">Title</th>
              <th className="border border-slate-700 rounded-md max-md:hidden">
                Publisher
              </th>
              <th className="border border-slate-700 rounded-md max-md:hidden">
                Year Published
              </th>
              <th className="border border-slate-700 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {comics.map((comic, index) => (
              <tr key={comic_id} className="h-8">
                <td className="border border-slate-800 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-800 rounded-md text-center">
                  {comic.title}
                </td>
                <td className="border border-slate-800 rounded-md text-center max-md:hidden">
                  {comic.publisher}
                </td>
                <td className="border border-slate-800 rounded-md text-center max-md:hidden">
                  {comic.publishYear}
                </td>
                <td className="border border-slate-800 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`comics/details/${comic._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/comics/edit/${comic._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/comics/delete/${comic._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
