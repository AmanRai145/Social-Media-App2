// src/components/HomePage.jsx
import { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext'; // Import the PostContext

const HomePage = () => {
  const { posts, addPost } = useContext(PostContext); // Access posts and the addPost function
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    const post = { id: Date.now(), content: newPost };
    addPost(post); 
    setNewPost(''); 
  };

  const handleUpdatedPost = () => {
    const id = post.id;  
    const updatedPost = { content: newPost };  
    updatePost(id, updatedPost);  
    setNewPost("");  
  };
  

  return (
    <div>
      <h1>Home Page</h1>
      <input 
        type="text" 
        value={newPost} 
        onChange={(e) => setNewPost(e.target.value)} 
        placeholder="Write a post..." 
      />
      <button onClick={handleAddPost}>Add Post</button>

      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;