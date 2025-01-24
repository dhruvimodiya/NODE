import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">E-Commerce Store</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link to="/shop" className="hover:text-blue-300">Shop</Link></li>
                <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-8 space-y-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 E-Commerce Store. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

