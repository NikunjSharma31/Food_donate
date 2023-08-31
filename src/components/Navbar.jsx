import React from 'react';
import { BrowserRouter as Router, Outlet, Routes, Route, Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className="bg-white z-10 fixed top-0 left-0 right-0">
            <div className=" py-7 px-10 h-12 max-w-full  flex items-center justify-between">
                <div className="flex justify-center items-center">
                    <a href="/" className="text-orange-300 font-bold flex font-lugrasimo text-2xl">
                        <img className='h-10 w-10' src="https://media.istockphoto.com/id/459898187/photo/leaf-or-eco-icon.jpg?s=612x612&w=0&k=20&c=negzKKDn8ZHh4mfOqFakhPCAz8lmT6EyRkrj5CPFJTs=" alt="logo" />
                        GiveaBite
                    </a>
                </div>
                <div className="hidden md:flex space-x-8 font-lugrasimo font-semibold items-center">
                    <Link to="/" className="text-green-900 hover:text-slate-800 group">
                        Home
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600'></span>
                    </Link>
                    <Link to={`foundation`} className="text-green-900 hover:text-slate-800 group">
                        Foundation
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600'></span>
                    </Link>
                    <Link to={`help`} className="text-green-900 hover:text-slate-800 group">
                        How to help?
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600'></span>
                    </Link>
                    <Link to="/events" className="text-green-900 hover:text-slate-800 group">
                        Events
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600'></span>
                    </Link>
                    <Link to={`contact`} className="text-green-900 hover:text-slate-800 group">
                        Contact
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600'></span>
                    </Link>
                    <Link to={`register`}>
                        <button className='group items-center bg-orange-500 rounded-full  text-white py-2 px-3 mx-auto flex'>
                            Join Now
                            <span className='ml-2 items-center  flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out'><BsArrowRight /></span>
                        </button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </nav>
    );
};

export default Navbar;
