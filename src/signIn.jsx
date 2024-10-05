import React, { useState } from 'react'
import './index.css';
import { appi } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appi);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInuesr = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log('SignIn Succses'))
      .catch((error) => console.error("Error creating user:", error));
  };

  return (
    <> 
      <h1>SignIn Page </h1>

      <label>Email</label>
      <input 
        type="email"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
        placeholder="Enter Your Email Here"
      />
     
      <label>Password</label>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required
        placeholder="Enter Your Password Here"
      />

      <button onClick={signInuesr}>Sign Up</button>
    </>
  );
}

export default SigninPage; 
