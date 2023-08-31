import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="relative">
            {images.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className={`w-full ${index === currentImageIndex ? '' : 'hidden'
                        }`}
                    style={{ height: '500px', objectFit: 'cover' }}
                />
            ))}
        </div>
    );
};