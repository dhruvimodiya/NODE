import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [message, setMessage] = useState("");

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

    const sendOtp = () => {
        axios.post("http://localhost:8000/send-otp", { email })
            .then((response) => {
                setMessage(response.data.message);
                setOtpSent(true);
            })
            .catch((error) => {
                setMessage("Failed to send OTP. Please try again.");
                console.error(error);
            });
    };

    const verifyOtp = () => {
        fetch("http://localhost:8000/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otp }),
        })
            .then((response) => response.json())
            .then((data) => {
                setOtpVerified(true);
                setMessage("Email verified successfully!");
            })
            .catch((error) => {
                setMessage("Invalid OTP. Please try again.");
                console.error(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!otpVerified) {
            setMessage("Please verify your email before registering.");
            return;
        }

        const formData = new FormData(event.target);
        fetch("http://localhost:8000/register", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage("Registration successful!");
            })
            .catch((error) => {
                setMessage("Registration failed. Please try again.");
                console.error(error);
            });
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
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                    {!otpSent && (
                        <button
                            type="button"
                            onClick={sendOtp}
                            className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send OTP
                        </button>
                    )}
                </div>

                {otpSent && !otpVerified && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            placeholder="Enter the OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={verifyOtp}
                            className="mt-2 py-1 px-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    disabled={!otpVerified}
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

                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </form>
        </div>
    );
};

export default Register;
