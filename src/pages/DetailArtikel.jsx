/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailArticle = () => {
  const [articleDetail, setArticleDetail] = useState(null);
  const [error, setError] = useState(null);
  
  // Use useParams hook from react-router-dom to get articleId from URL path
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setError('Article ID is missing');
      return;
    }

    // Fetch detail article using the URL path format
    fetch(`https://api-article.abdulfaqih.eu.org/article/${id}`)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.status === 'success') {
          const articleDetail = responseData.data.article;
          setArticleDetail(articleDetail);
        } else {
          setError(`API request failed with message: ${responseData.message}`);
        }
      })
      .catch((error) => {
        setError(`Error fetching detail data from API: ${error.message}`);
      });
  }, [id]); // Include id in dependency array to re-fetch data when id changes

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  }

  if (!articleDetail) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-DS-beige-100 shadow-lg rounded-md">
      <div className="contentt mx-auto flex flex-col max-w-[1200px]">
        <div className="flex flex-col items-center gap-9 p-6 mb-8">
          <h1 className="text-5xl font-bold mb-4">{articleDetail.title}</h1>
          <div className="flex flex-col items-start gap-5 xl:w-full">
            <img src={articleDetail.image} className="w-[935px] max-h-[490px] object-cover rounded-lg md:max-h-48 xl:w-full" alt="artikel 1" />
            <div className="flex items-start gap-5 font-medium text-lg md:text-sm">
              <p className="text-gray-600">{new Date(articleDetail.date).toLocaleDateString()}</p>
              <p className="text-gray-600">{articleDetail.author}</p>
            </div>
          </div>
          <div className="text-gray-700 text-justify text-xl font-normal">{articleDetail.content}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;