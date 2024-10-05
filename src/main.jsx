import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PostProvider } from './context/PostContext'; // Import the PostProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </StrictMode>,
);
