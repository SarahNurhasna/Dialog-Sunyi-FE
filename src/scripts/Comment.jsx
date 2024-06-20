import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://dialog-sunyi-be.vercel.app/api/comments');
        if (response.data.status === 'success') {
          const filteredComments = response.data.data.filter(comment => comment.id_artikel === articleId);
          setComments(filteredComments);
        } else {
          setError('Failed to fetch comments');
        }
      } catch (error) {
        setError(`Error fetching comments: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [articleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !comment) {
      setError('Name and comment cannot be empty');
      return;
    }

    try {
      const response = await axios.post('https://dialog-sunyi-be.vercel.app/api/comment', {
        name,
        comment,
        id_artikel: articleId,
      });

      if (response.data.status === 'success') {
        setComments((prevComments) => [...prevComments, response.data.data]);
        setName('');
        setComment('');
        setError(null);
      } else {
        setError('Failed to post comment');
      }
    } catch (error) {
      setError(`Error posting comment: ${error.message}`);
    }
  };

  if (loading) {
    return (
      <div data-aos="fade-up" data-aos-delay="100" className="flex justify-center">
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
          Loading Comments...
        </button>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="border-t-[1px] border-DS-charcoal dark:border-DS-beige pt-4 p-6">
      <h2 className="text-lg font-bold mb-4 text-DS-charcoal dark:text-DS-beige">Kirimkan Komentar</h2>
      <div className="flex flex-col space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="bg-DS-beige dark:bg-DS-charcoal-700 text-DS-charcoal dark:text-DS-beige p-4 rounded-lg shadow-md">
            <h3 className="text-lg text-DS-charcoal dark:text-DS-beige font-bold">{comment.name}</h3>
            <p className="text-sm mb-2">Posted on {new Date(comment.date).toLocaleDateString()}</p>
            <p className="">{comment.comment}</p>
          </div>
        ))}
        <form className="bg-DS-beige dark:bg-DS-charcoal-700 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold mb-2 text-DS-charcoal dark:text-DS-beige">Tambah Komentar</h3>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-DS-beige font-bold mb-2" htmlFor="name">
              Nama
            </label>
            <input
              className="bg-DS-beige dark:bg-DS-charcoal shadow appearance-none border dark:border-DS-beige-100 rounded w-full py-2 px-3 text-gray-700 dark:text-DS-beige-100 leading-tight focus:outline-none focus:shadow-outline focus:bg-inherit"
              id="name"
              type="text"
              placeholder="Masukkan namamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between space-x-4">
            <div className="comment flex-grow mb-4">
              <label className="block text-gray-700 dark:text-DS-beige font-bold mb-2" htmlFor="comment">
                Komentar
              </label>
              <textarea
                className="bg-DS-beige dark:bg-DS-charcoal shadow appearance-none border dark:border-DS-beige-100 rounded w-full py-2 px-3 text-gray-700 dark:text-DS-beige leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                rows="3"
                placeholder="Tulis komentarmu"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="submit-btn content-center">
              <button className="bg-DS-verdigris hover:bg-DS-beige text-white hover:text-DS-verdigris focus:ring-4 focus:outline-none focus:ring-DS-celeste font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2" type="submit">
                <svg className="w-4 h-4 size-6 stroke-[1.5px] stroke-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
