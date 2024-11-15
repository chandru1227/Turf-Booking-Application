import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate(); 
    const [showModal, setShowModal] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleUserLogin = () => {
        navigate('/userlogin');
    };

    // Function to navigate to admin login
    const handleAdminLogin = () => {
        window.location.href = "http://localhost:5174/adminlogin"
        // navigate('http://localhost:5174/adminlogin');
    };

    return (
        <div className="relative w-full h-screen">
            {/* Image Slider */}
            <ImageSlider />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    Welcome to Book-A-Ground
                </h1>
                <p className="text-lg md:text-xl mb-8 text-center max-w-lg">
                    Find and book sports grounds easily and conveniently in your area. Start exploring and reserve your spot now!
                </p>
                
                {/* Sign In Button */}
                <button
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
                    onClick={toggleModal} // Show modal on click
                >
                    Sign In
                </button>
            </div>

            {/* Modal Component */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Select Role</h2>
                        
                        <div className="flex flex-col gap-4">
                            {/* Admin Button */}
                            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={handleAdminLogin}>
                                Admin
                            </button>
                            {/* User Button */}
                            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md" onClick={handleUserLogin}>
                                User
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            className="mt-6 w-full text-center text-gray-600 hover:text-gray-800"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
