/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch comments for the article
    fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setComments(data.data.comments);
        } else {
          setError(`Failed to fetch comments: ${data.message}`);
        }
      })
      .catch((error) => setError(`Error fetching comments: ${error.message}`));
  }, [articleId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Post new comment
    fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newComment }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          // Update comments state with the new comment
          setComments([...comments, data.data.comment]);
          setNewComment('');
        } else {
          setError(`Failed to add comment: ${data.message}`);
        }
      })
      .catch((error) => setError(`Error adding comment: ${error.message}`));
  };

  return (
    <div className="comments-section">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded-md mb-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment mb-4 p-2 border rounded-md">
            <p>{comment.content}</p>
            <p className="text-gray-600 text-sm">by {comment.author} on {new Date(comment.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;