import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);

    try {
      const response = await axios.post("http://localhost:8000/login", FormData);
      alert("Login Successful");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred. Please try again.";
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <div className="mb-4">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={FormData.email}
              required
              className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">
              <i className="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={FormData.password}
              required
              className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-indigo-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;