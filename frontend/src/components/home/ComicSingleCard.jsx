import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import ComicModal from "./ComicModal";

const ComicSingleCard = ({ comic }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        key={comic._id}
        className="border-2 border-slate-600 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
      >
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
          {comic.publishYear}
        </h2>
        <h4 className="my-2 text-slate-500">{comic._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{comic.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{comic.publisher}</h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          <BiShow
            className="text-3xl text-purple-700 hover:text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/comics/details/${comic._id}`}>
            <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
          </Link>
          <Link to={`/comics/details/${comic._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
          </Link>
          <Link to={`/books/delete/${comic._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
          </Link>
        </div>
        {showModal && (
          <ComicModal comic={comic} onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default ComicSingleCard;
