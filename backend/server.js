const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

app.use(cors());
app.use(bodyParser.json());

// Set up your PostgreSQL pool
const pool = new Pool({
  user: 'blog_admin',
  host: 'localhost',
  database: 'BlogApp',
  password: '100602',
  port: 5432,
});

// POST route to create a new post
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;

  // Insert the new post into the database
  try {
    const newPost = await pool.query(
      'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(newPost.rows[0]);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Error creating post' });
  }
});

// Route to get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows); // Send the posts as a JSON response
  } catch (err) {
    console.error('Error fetching posts', err);
    res.status(500).send('Error fetching posts');
  }
});


// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
