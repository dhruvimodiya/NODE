import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions, need assistance, or want to share feedback? 
            We'd love to hear from you. Get in touch with our team today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center bg-blue-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              We’re here to help! Feel free to contact us via any of the methods below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7v4a4 4 0 004 4v5m8-5H4"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">+1 123-456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10l1.507-.64a9.961 9.961 0 018.486 0L15 10m0 0l1.507-.64m-1.507.64V21m0 0H9m6 0H9M3 10v11"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">support@ecommerce.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">123 E-Commerce St., City, Country</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Need Assistance?</h3>
          <p className="text-lg mb-8">
            We’re here to help you with all your shopping needs. Contact us now and experience exceptional customer service.
          </p>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Get Help Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
