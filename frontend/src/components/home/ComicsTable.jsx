import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const ComicsTable = ({ comics }) => {
  return (
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
          <tr key={comic._id} className="h-8">
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
  );
};

export default ComicsTable;
