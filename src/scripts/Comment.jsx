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
      const response = await axios.post('https://dialog-sunyi-be.vercel.app/api/comments', {
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
    return <div>Loading comments...</div>;
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
              className="bg-DS-beige dark:bg-DS-charcoal shadow appearance-none border dark:border-DS-beige-100 rounded w-full py-2 px-3 text-gray-700 dark:text-DS-beige-100 leading-tight focus:outline-none focus:shadow-outline"
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
