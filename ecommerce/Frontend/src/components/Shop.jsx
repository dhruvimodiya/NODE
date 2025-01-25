import React, { useState } from 'react';

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', price: 129.99, image: 'https://i.pinimg.com/736x/df/51/74/df5174e08b7431ae88e07eb76870a33a.jpg' },
  { id: 2, name: 'Smartphone Case', price: 19.99, image: 'https://i.pinimg.com/736x/d0/63/25/d0632520f6a09432d752fadd0d1816de.jpg' },
  { id: 3, name: 'Fitness Tracker', price: 89.99, image: 'https://i.pinimg.com/736x/60/1a/c6/601ac65c10c39850d733211d93f54a4e.jpg' },
  { id: 4, name: 'Bluetooth Speaker', price: 59.99, image: 'https://i.pinimg.com/736x/04/17/c5/0417c5e5ceb9d8cfb53aba1b0a75b133.jpg' },
  { id: 5, name: 'Smart Watch', price: 199.99, image: 'https://i.pinimg.com/736x/2c/f6/fb/2cf6fb9e9e746d32ed3346a220c8d575.jpg' },
  { id: 6, name: 'Gaming Mouse', price: 49.99, image: 'https://i.pinimg.com/736x/5b/5f/d4/5b5fd4df90405c64d8222db28ce55e50.jpg' },
];

function Shop() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="relative">
      <div className="container mx-auto p-8">
        <h3 className="text-3xl font-semibold text-blue-600 text-center mb-12">Our Shop</h3>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-medium text-gray-800 mb-2">{product.name}</h4>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 w-80`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Your Cart</h3>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
               ✖
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty. Add some products!</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div>
                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Total Price */}
          {cart.length > 0 && (
            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 w-full"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
