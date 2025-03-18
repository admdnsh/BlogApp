// src/components/Posts.js
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    fetch('http://localhost:5000/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Set posts to state
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <div className="post-list">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p><small>Posted on: {new Date(post.created_at).toLocaleDateString()}</small></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
