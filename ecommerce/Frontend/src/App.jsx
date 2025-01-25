import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/contact';
import Login from './components/Login';
import Register from './components/Register';

function NavbarWrapper() {
  const location = useLocation();
  const showNavbarPaths = ['/', '/shop', '/about', '/contact'];
  
  return showNavbarPaths.includes(location.pathname) ? (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">E-Commerce Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/shop" className="hover:text-blue-300">Shop</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  ) : null;
}

function FooterWrapper() {
  const location = useLocation();
  const showFooterPaths = ['/', '/shop', '/about', '/contact'];
  
  return showFooterPaths.includes(location.pathname) ? (
    <footer className="bg-blue-600 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  ) : null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavbarWrapper />
        
        {/* Main Content */}
        <main className="flex-grow container mx-auto p-8 space-y-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <FooterWrapper />
      </div>
    </Router>
  );
}

export default App;

