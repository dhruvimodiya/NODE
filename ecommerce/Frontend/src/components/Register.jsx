import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const registrationData = { email, otp, username, password };
        axios.post("http://localhost:8000/register", registrationData)
            .then((response) => {
                setMessage(response.data.message);
                navigate('/'); // Redirect to login page
            })
            .catch((error) => {
                setMessage("Registration failed. Please try again.");
                console.error(error);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <input
                        type="email"
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

                {otpSent && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Enter OTP</label>
                        <input
                            type="text"
                            placeholder="Enter the OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
                    <input
                        type="password"
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
                        <Link to="/" className="text-blue-500 hover:text-blue-600">Login here</Link>
                    </p>
                </div>

                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </form>
        </div>
    );
};

export default Register;
