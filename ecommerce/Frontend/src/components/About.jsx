import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Welcome to <span className="font-semibold">E-Commerce Store</span> — where quality meets convenience. 
            Discover the best products, tailored just for you.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-blue-600 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are a trusted e-commerce platform dedicated to providing you with high-quality products from top brands. 
              Our mission is to bring the best shopping experience to your fingertips with unparalleled service and unbeatable deals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're looking for the latest gadgets, stylish accessories, or everyday essentials, we’ve got it all under one roof. 
              Shop with confidence and enjoy seamless, secure, and fast delivery services.
            </p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/39/e4/13/39e41343f19b8c5e5c614a17305e97d0.jpg"
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold text-center text-blue-600 mb-12">
            What Makes Us Unique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://i.pinimg.com/736x/20/23/54/202354832149ed6a0dee132ea40e38b5.jpg"
                alt="Quality Products"
                className="w-20 h-20 object-cover mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Products
              </h4>
              <p className="text-gray-600">
                We partner with the best brands to ensure that you receive only the highest quality products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://i.pinimg.com/736x/d3/2b/89/d32b891ddd7beca7c4f08be240a98fb0.jpg"
                alt="Affordable Prices"
                className="w-20 h-20 object-cover mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Affordable Prices
              </h4>
              <p className="text-gray-600">
                Enjoy premium products without breaking the bank. Our prices are competitive and transparent.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://i.pinimg.com/736x/b4/b7/0f/b4b70f95cf8ba76916b70fd358969d09.jpg"
                alt="Customer Support"
                className="w-20 h-20 object-cover mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Dedicated Support
              </h4>
              <p className="text-gray-600">
                Our team is here to assist you with any queries or concerns, ensuring a smooth shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto text-center max-w-4xl">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">E-Commerce Store</span>, our mission is to create a shopping experience that is effortless, enjoyable, and empowering. 
            We believe that shopping should not only be about buying products, but also about discovering the joy of finding exactly what you need, when you need it.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Ready to Explore?</h3>
          <p className="text-lg mb-8">
            Discover top products, unbeatable prices, and a shopping experience tailored just for you.
          </p>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Start Shopping Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
