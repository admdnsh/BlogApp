import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Header at the top */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </main>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
