import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { appi } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appi);
import SigninPage from './signIn';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SigninPage />
  </StrictMode>,
)