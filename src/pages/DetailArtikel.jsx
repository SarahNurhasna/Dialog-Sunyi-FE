import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../scripts/Comment';

const DetailArticle = () => {
  const [articleDetail, setArticleDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setError('Article ID is missing');
      setLoading(false); // Set loading to false if there's an error
      return;
    }

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
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, [id]);

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <button
          disabled
          type="button"
          className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading Article...
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 px-4 py-8 bg-[#FFF4E2] dark:bg-DS-charcoal shadow-lg rounded-md">
      <div className="contentt mx-auto flex flex-col max-w-[1200px]">
        <div className="flex flex-col items-center gap-9 p-6 mb-8">
          <h1 className="text-5xl md:text-2xl xl:text-3xl font-bold mb-4 text-DS-charcoal dark:text-DS-beige">{articleDetail.name}</h1>
          <div className="flex flex-col items-start gap-5 xl:w-full">
            <img src={articleDetail.image} className="w-[935px] max-h-[490px] object-cover rounded-lg md:max-h-48 xl:w-full" alt="artikel 1" loading="lazy"/>
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
