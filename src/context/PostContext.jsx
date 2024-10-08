
import { createContext, useState } from 'react';
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  // These are the toys (data) that we want to share with everyone
  const [posts, setPosts] = useState([]); // Manage posts
  const [user, setUser] = useState(null); // Manage user session

  // Functions to modify the data
  const addPost = (post) => setPosts([...posts, post]);
  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => post.id === id ? updatedPost : post));
  };
  const deletePost = (id) => setPosts(posts.filter(post => post.id !== id));


  return (
    <PostContext.Provider value={{ posts, user, addPost, updatePost, deletePost, setUser }}>
      {children}
    </PostContext.Provider>
  );
};
