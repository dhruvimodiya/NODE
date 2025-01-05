import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast

const CreateProduct = () => {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: "",
        colors: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductData({ ...productData, image: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", productData.name);
        formData.append("description", productData.description);
        formData.append("price", productData.price);
        formData.append("colors", productData.colors);
        formData.append("image", productData.image);

        try {
            const response = await axios.post("http://localhost:8000/admin/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Product created successfully!");
            setProductData({
                name: "",
                description: "",
                price: "",
                colors: "",
                image: null,
            });
        } catch (error) {
            const errorMessage =
                error.response?.data?.error || "An unexpected error occurred. Please try again.";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Product</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter product description"
                        value={productData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        value={productData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Colors</label>
                    <input
                        type="text"
                        name="colors"
                        placeholder="Enter product colors (comma separated)"
                        value={productData.colors}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Product Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full border border-gray-300 rounded-md focus:outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct; 