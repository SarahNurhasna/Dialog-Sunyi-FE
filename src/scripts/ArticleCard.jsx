/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://dialog-sunyi-be.vercel.app/api/articles');
        if (response.data.status === 'success') {
          setArticles(response.data.data);
        } else {
          console.error('API request failed with message:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="grid gap-x-14 gap-y-8 grid-cols-1 ilg:grid-cols-3 imd:grid-cols-2 pb-12 bg-DS-beige dark:bg-DS-charcoal">
      {articles.map((article) => (
        <div key={article._id} className="group border border-gray-200 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden bg-DS-beige">
          <img src={article.image} alt={article.name} className="image-card object-cover w-full max-h-48 group-hover:scale-110 transition-all duration-300 ease-in-out" />
          <div className="card-body mx-2 my-4 p-4">
            <div className="mb-2 text-DS-verdigris transition-all duration-300 ease-in-out flex lg:flex-wrap-reverse items-center justify-between">
              <span className="tag font-normal bg-transparent border-DS-verdigris border-x border-y rounded-md px-2 py-1 text-base text-DS-verdigris group-hover:bg-DS-verdigris group-hover:text-white group-hover:font-medium">
                {article.author}
              </span>
              <span className="ml-2 text-base text-DS-verdigris">
                {new Date(article.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="text-lg font-medium mb-2 transition-all duration-300 ease-in-out">{article.name}</h3>
            <p className="text-xs text-gray-700 mb-4 overflow-hidden">{article.content.slice(0, 200)} ...</p>
            <Link to={`/detail-artikel/${article._id}`} className="flex items-center justify-end text-sm no-underline transition-all duration-300 ease-in-out font-normal group-hover:font-medium text-DS-davysgray group-hover:text-DS-verdigris">
              Baca selanjutnya
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
