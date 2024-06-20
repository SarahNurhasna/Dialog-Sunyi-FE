/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../scripts/Comment';

const DetailArticle = () => {
  const [articleDetail, setArticleDetail] = useState(null);
  const [error, setError] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setError('Article ID is missing');
      return;
    }

    // Fetch detail article using the URL path format
    fetch(`https://dialog-sunyi-be.vercel.app/api/article/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData.status === 'success') {
          const articleDetail = responseData.data;
          setArticleDetail(articleDetail);
        } else {
          setError(`API request failed with message: ${responseData.message}`);
        }
      })
      .catch((error) => {
        setError(`Error fetching detail data from API: ${error.message}`);
      });
  }, [id]);

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  }

  if (!articleDetail) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 px-4 py-8 bg-DS-beige-100 dark:bg-DS-charcoal shadow-lg rounded-md">
      <div className="contentt mx-auto flex flex-col max-w-[1200px]">
        <div className="flex flex-col items-center gap-9 p-6 mb-8">
          <h1 className="text-5xl md:text-2xl xl:text-3xl font-bold mb-4 text-DS-charcoal dark:text-DS-beige">{articleDetail.name}</h1>
          <div className="flex flex-col items-start gap-5 xl:w-full">
            <img src={articleDetail.image} className="w-[935px] max-h-[490px] object-cover rounded-lg md:max-h-48 xl:w-full" alt="artikel 1" />
            <div className="flex items-start gap-5 font-medium text-lg md:text-sm">
              <p className="text-DS-charcoal dark:text-DS-beige">{new Date(articleDetail.date).toLocaleDateString()}</p>
              <p className="text-DS-charcoal dark:text-DS-beige">{articleDetail.author}</p>
            </div>
          </div>
          <div className="text-DS-charcoal dark:text-DS-beige text-justify text-xl font-normal md:text-base" dangerouslySetInnerHTML={{ __html: articleDetail.content }} />
        </div>
      </div>
      <CommentSection articleId={articleDetail.id} />
    </div>
  );
};

export default DetailArticle;
