import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route: Signup */}
        <Route path="/" element={<SignUpForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />

        {/* Home and other pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
