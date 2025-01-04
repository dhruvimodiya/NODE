import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleGenerateOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3000/generate-otp', { email });
            setMessage(response.data);
            setOtpSent(true);
        } catch (error) {
            setMessage('Error sending OTP. Please try again.');
            console.error(error);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3000/verify-otp', { email, otp });
            setMessage(response.data);
        } catch (error) {
            setMessage('Invalid OTP. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded"
                required
            />
            <button
                onClick={handleGenerateOtp}
                className="mb-4 p-2 bg-blue-500 text-white rounded"
            >
                Send OTP
            </button>

            {otpSent && (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="mb-2 p-2 border border-gray-300 rounded"
                        required
                    />
                    <button
                        onClick={handleVerifyOtp}
                        className="p-2 bg-green-500 text-white rounded"
                    >
                        Verify OTP
                    </button>
                </>
            )}

            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default OtpVerification; 