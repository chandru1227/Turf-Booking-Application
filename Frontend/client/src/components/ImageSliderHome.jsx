import React, { useState, useEffect } from 'react';

const ImageSliderHome = () => {
    const images = [
        'versus 1',
        'versus 2',
        'versus 3',
        'versus 4',
        'versus 5',
        'versus 6',
        // Add more image URLs as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-80 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Images */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={`../src/images/${image}.jpg`}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            {/* Previous and Next Buttons */}
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 z-30">
                &#10094;
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 z-30">
                &#10095;
            </button>
        </div>
    );
};

export default ImageSliderHome;
