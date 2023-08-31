import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
        <div className="relative px-10 py-14">
            <h1 className="text-center font-lobster text-5xl text-green-900 mb-16">Our Events</h1>
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

            <div className='flex justify-center items-center flex-col py-24'>
                <h1 className='font-lugrasimo text-2xl'>Lets come together and support each other</h1>
                <Link to={`donate`}>
                    <button className="flex mt-10 items-center text-white bg-slate-900 border-0 py-2 px-2 h-12 focus:outline-none w-44 justify-center rounded-full ">Donate Now
                        <span className="ml-4 text-white bg-orange-600 p-1 rounded-full w-12 h-8 flex justify-center  items-center"> <BsArrowRight /></span></button>
                </Link>
            </div>
        </div>
    );
};

export default Slider;
