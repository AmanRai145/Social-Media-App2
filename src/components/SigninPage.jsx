import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { appi } from "../firebase";
import { Link } from 'react-router-dom';

const auth = getAuth(appi);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log('SignIn Success'))
      .catch((error) => console.error("Error signing in:", error));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Your Email Here"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Your Password Here"
          />
        </div>
        <button
          onClick={signInUser}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Sign In
        </button>
        <p className="text-center mt-4">
          New user? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SigninPage;
