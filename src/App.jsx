// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SigninPage from './components/SigninPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
