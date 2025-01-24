import React from 'react'

function Home() {
  return (
    <>
     <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8 space-y-12">
        {/* Hero Section */}
        <section id="home" className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold mb-4">Discover the Best Products for You!</h2>
          <p className="text-lg mb-8">Browse our exclusive collection of top-rated products that will take your shopping experience to the next level.</p>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-50 transition duration-300">
            Start Shopping
          </button>
        </section>

        {/* Featured Products Section */}
        <section id="shop" className="py-16">
          <h3 className="text-3xl font-semibold text-blue-600 text-center mb-12">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img src="https://i.pinimg.com/736x/df/51/74/df5174e08b7431ae88e07eb76870a33a.jpg" alt="Product 1" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Wireless Headphones</h4>
              <p className="text-gray-600">$129.99</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img src="https://i.pinimg.com/736x/d0/63/25/d0632520f6a09432d752fadd0d1816de.jpg" alt="Product 2" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Smartphone Case</h4>
              <p className="text-gray-600">$19.99</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img src="https://i.pinimg.com/736x/60/1a/c6/601ac65c10c39850d733211d93f54a4e.jpg" alt="Product 3" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Fitness Tracker</h4>
              <p className="text-gray-600">$89.99</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img src="https://i.pinimg.com/736x/04/17/c5/0417c5e5ceb9d8cfb53aba1b0a75b133.jpg" alt="Product 4" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Bluetooth Speaker</h4>
              <p className="text-gray-600">$59.99</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="bg-gray-50 py-16">
          <h3 className="text-3xl font-semibold text-blue-600 text-center mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
              <img src="https://i.pinimg.com/736x/b4/46/00/b4460009475b8f39e215ea6cdfbc11ef.jpg" alt="Quality" className="mb-4 w-20 h-20 object-cover rounded-full" />
              <h4 className="text-xl font-semibold mb-4">Top Quality Products</h4>
              <p className="text-gray-600">We offer only the highest quality products sourced from trusted brands.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
              <img src="https://i.pinimg.com/736x/68/9a/1d/689a1d97434041218d0d1b3ea6649736.jpg" alt="Affordable" className="mb-4 w-20 h-20 object-cover rounded-full" />
              <h4 className="text-xl font-semibold mb-4">Affordable Prices</h4>
              <p className="text-gray-600">Get the best deals and discounts with our competitive pricing model.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
              <img src="https://i.pinimg.com/736x/7f/a2/df/7fa2dfa7261a98a52ccb363dffbb60fa.jpg" alt="Fast Delivery" className="mb-4 w-20 h-20 object-cover rounded-full" />
              <h4 className="text-xl font-semibold mb-4">Fast Delivery</h4>
              <p className="text-gray-600">Enjoy fast and reliable delivery to your doorstep, anywhere in the world.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-16">
          <h3 className="text-3xl font-semibold text-blue-600 mb-8">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            Have any questions or want to know more? Reach out to us for quick assistance.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Get in Touch
          </button>
        </section>
      </main>
    </div> 
    </>
  )
}

export default Home
