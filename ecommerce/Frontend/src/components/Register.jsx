import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast

const Register = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [username, setUsername] = useState(""); // Added username state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Added password state

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            username,
            email,
            password,
        };

        try {
            const response = await axios.post("http://localhost:8000/register", formData);
            toast.success("Registration successful!"); // Show success toast
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Error response:', error.response.data);
                console.error('Status code:', error.response.status);
                toast.error(error.response.data.error || "Registration failed. Please try again."); // Show specific error toast
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
                toast.error("No response received from the server. Please try again."); // Show no response toast
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
                toast.error("An unexpected error occurred. Please try again."); // Show unexpected error toast
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
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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