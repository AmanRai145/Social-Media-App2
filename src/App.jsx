import { useState } from 'react'
import './index.css';
import { appi } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appi);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value))
      .catch((error) => console.error("Error creating user:", error));
  };

  return (
    <> 
      <h1>FIREBASE VITE APP</h1>

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

      <button onClick={signupUser}>Sign Up</button>
    </>
  );
}

export default App;
