import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otpDisabled, setOtpDisabled] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(true);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startOtpTimer = () => {
    setTimer(120); // 2 minutes
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGeneratedOtp(null); // Expire OTP
          setOtpVerified(false);
          setShowOtpSection(false); // Hide OTP section after timeout
          toast.error("OTP expired. Please resend.");
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email to send the OTP.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }

    setOtpDisabled(true);
    setTimeout(() => setOtpDisabled(false), 120000); // Re-enable after 2 minutes

    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(newOtp);
    setIsOtpValid(true);
    startOtpTimer();

    const serviceID = "service_qbtuvyd";
    const templateID = "template_5s7s2a4";
    const publicKey = "LoR-Be-wOJK5y9tdv";

    const templateParams = {
      from_name: email,
      to_name: username,
      message: `Your OTP is: ${newOtp}`,
      reply_to: "20bmiit077@gmail.com",
      to: email,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("OTP sent successfully to your email!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOtp = () => {
    if (!isOtpValid || !generatedOtp) {
      toast.error("OTP expired. Please resend.");
      return;
    }

    if (otp.trim() === generatedOtp.toString()) {
      console.log("OTP verified successfully!");
      setIsOtpValid(false);
      setGeneratedOtp(null); // Clear OTP after successful verification
      setOtp(""); // Clear the input field after successful verification
      setOtpVerified(true);
      setShowOtpSection(false); // Hide OTP section after verification
    } else {
      console.error("Invalid OTP. Please try again.");
      setOtp(""); // Clear the input field for a retry
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!isOtpValid) {
      toast.error("Please verify your OTP before submitting.");
      return;
    }
  
    const formData = {
      username,
      email,
      password,
    };
  
    const navigate = useNavigate();  // Hook for navigation
  
    try {
      const response = await axios.post("http://localhost:8000/register", formData);
      
      // Log the full response to debug
      console.log("Server response:", response);
  
      if (response.status === 200) {
        toast.success("Registration successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        
        // Redirect to the home page
        navigate("/");  // Redirect to Home page (you can replace "/" with the appropriate path)
      } else {
        // Handle unexpected status code
        toast.error("Registration failed. Please try again.");
        console.log("Registration failed:", response.data);
      }
    } catch (error) {
      if (error.response) {
        // Server-side errors
        console.error("Server error:", error.response.data);
        toast.error(
          error.response.data.error || "Registration failed. Please try again."
        );
      } else if (error.request) {
        // No response received from the server
        console.error("No response received:", error.request);
        toast.error("No response received from the server. Please try again.");
      } else {
        // Unexpected error
        console.error("Unexpected error:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
        </h2>

        <div className="mb-4 flex justify-center">
          <div
            onClick={() => document.getElementById("fileInput").click()}
            className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer"
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile Preview"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-500">Upload Image</span>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[85%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <button
              className="p-1 text-xs bg-blue-600 text-white rounded-lg"
              onClick={handleSendOtp}
              disabled={otpDisabled || otpVerified}
            >
              Send OTP
            </button>
          </div>
        </div>

        {showOtpSection && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              OTP
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-[70%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-[30%] bg-green-600 text-white py-2 rounded-lg"
              >
                Verify
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              OTP expires in: {Math.max(timer, 0)}s
            </p>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
