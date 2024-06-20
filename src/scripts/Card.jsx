import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ article }) => {
  return (
    <div className="group border border-gray-200 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden bg-DS-beige mb-6 mx-4">
      <img src={article.image} alt={article.name} className="image-card object-cover w-full h-48 group-hover:scale-110 transition-all duration-300 ease-in-out" />
      <div className="card-body mx-4 my-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="tag font-normal bg-transparent border-DS-verdigris border rounded-md px-2 py-1 text-base text-DS-verdigris group-hover:bg-DS-verdigris group-hover:text-white group-hover:font-medium">
            {article.author}
          </span>
          <span className="ml-2 text-base text-DS-verdigris">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-lg font-medium mb-2 overflow-hidden truncate">{article.name}</h3>
        <p className="text-sm text-gray-700 line-clamp-3">{article.content.slice(0, 200)} ...</p>
        <Link to={`/detail-artikel/${article._id}`} className="block mt-2 text-sm font-normal text-DS-davysgray transition-all duration-300 ease-in-out hover:font-medium hover:text-DS-verdigris">
          Baca selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Card;
