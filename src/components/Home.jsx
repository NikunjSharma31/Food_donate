import React from "react";
import Slider from './Slider';
import Footer from './Footer';
// import Donate from './components/Donate';
// import Register from './components/Register';
import Hero from './Hero';
import Navbar from "./Navbar";

const images = [
    'https://media.istockphoto.com/id/922653184/photo/volunteers-feed-the-homeless-free-soup-in-a-bowl-of-beggar.webp?b=1&s=170667a&w=0&k=20&c=5MJRV6J2aeQFkNEHCL6QaMP-nGt1G2O0C48t4wrQH1A=',
    'https://media.istockphoto.com/id/1422544830/photo/homeless-man-in-the-city.jpg?s=612x612&w=0&k=20&c=Pnshin_0XYTs-cgtO86pA96HKNzi01qgW91GGhTvSTc=',
    'https://media.istockphoto.com/id/483813120/photo/african-hands-begging-help.jpg?s=612x612&w=0&k=20&c=ouobTUrbIPpxR82CLrvCQhH3DQnkeMxffTbdT4ODDWs=',

];

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Hero />
            <Slider images={images} />
            <Footer />

        </div>);
};

export default Home;
