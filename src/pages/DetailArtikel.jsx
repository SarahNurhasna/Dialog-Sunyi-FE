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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">{articleDetail.title}</h1>
        <div className="flex flex-col items-center mb-4">
          <img src={articleDetail.image} className="w-full object-cover rounded-md mr-4" alt="artikel 1" />
          <div>
            <p className="text-gray-600">{new Date(articleDetail.date).toLocaleDateString()}</p>
            <p className="text-gray-600">{articleDetail.author}</p>
          </div>
        </div>
        <div className="text-gray-700">{articleDetail.content}</div>
      </div>
    </div>
  );
};

export default DetailArticle;
