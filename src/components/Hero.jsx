import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { motion as m } from "framer-motion";

const buttonVariants = {
    hover: {
        scale: [1.1],
        transition: {
            yoyo: Infinity,
            duration: 0.3
        }
    }
};

const Hero = () => {
    return (
        <div className="">
            <div className="px-10">
                <div className="text-gray-600  body-font py-16  flex justify-evenly  flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 relative">
                        <div className="absolute  ">
                            <h1 className="opacity-10 font-lugrasimo text-[10rem] text-orange-600">Donate</h1>
                        </div>
                        <div className="absolute top-48 left-40 ">
                            <h1 className="opacity-10 font-lugrasimo text-[10rem]  text-orange-600">Now</h1>
                        </div>
                        <h1 className="text-orange-400 text-7xl title-font font-medium mb-4">Be the Reason</h1>
                        <h1 className="text-gray-900 text-5xl title-font font-prociono font-medium mb-4">Someone Smiles Today!</h1>

                        <p className="text-slate-950 leading-relaxed mb-4">Behind every act of kindness lies the potential to transform lives. When you donate a meal, you're offering more than sustenance; you're offering dignity, comfort, and the assurance that someone cares. Join us as we champion the cause of eradicating hunger and creating a world where everyone has the chance to savor the simple pleasure of a hearty meal.</p>
                        <Link to="/donate" >
                            <m.button variants={buttonVariants} whileHover="hover" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', delay: 0.5, stiffness: 120 }} className="flex mt-10 items-center text-white bg-slate-900 border-0 py-2 px-2 h-12 focus:outline-none w-44 justify-center rounded-full ">Donate Now
                                <span className="ml-4 text-white bg-orange-600 p-1 rounded-full w-12 h-8 flex justify-center  items-center"> <BsArrowRight /></span></m.button>
                        </Link>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full  lg:h-auto h-52 object-cover object-center rounded-lg" src="https://img.freepik.com/free-vector/volunteers-like-helping-planting-seeds-donating-clothes-toys-into-box-volunteering-volunteer-services-altruistic-job-activity-concept_335657-614.jpg?size=626&ext=jpg&ga=GA1.2.2021577694.1678375521&semt=ais" />
                </div>
                <div className=" py-3 ">
                    <h1 className="text-center font-lobster text-5xl text-green-900">Why choose us?</h1>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3 hover:scale-110 hover:duration-200  transition-all ease-in-out">
                                    <div className="h-full bg-white hover:border-2 hover:border-gray-400 hover:shadow-lg  hover:shadow-slate-400   rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://img.freepik.com/free-vector/community-social-media-people_24877-50715.jpg?size=626&ext=jpg&ga=GA1.2.2021577694.1678375521&semt=ais" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3 text-center font-fondamento">Worldwide Leaders</h1>
                                            <p className="leading-relaxed mb-3">We take pride in being recognized as worldwide leaders in the fight against hunger. Our unwavering commitment to alleviating food insecurity has positioned us at the forefront of impactful change.</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 hover:scale-110 hover:duration-200 transition-all ease-in-out">
                                    <div className="h-full bg-white hover:border-2 hover:border-gray-400 hover:shadow-lg  hover:shadow-slate-400 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://img.freepik.com/premium-photo/business-success-investment-teamwork-partnership-concept-generate-ai_868783-2456.jpg" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-fondamento font-medium text-gray-900 mb-3 text-center">Trusted Organization</h1>
                                            <p className="leading-relaxed mb-3">Trust is the cornerstone of our organization. For years, we have earned the confidence of individuals, communities, and partners through our transparent and accountable practices. </p>
                                            <div className="flex items-center flex-wrap">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 hover:scale-110 hover:duration-200 transition-all ease-in-out">
                                    <div className="h-full bg-white hover:border-2 hover:shadow-lg  hover:shadow-slate-400 hover:border-gray-400 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7720.jpg?size=626&ext=jpg&ga=GA1.2.2021577694.1678375521&semt=ais" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-fondamento font-medium text-gray-900 mb-3 text-center">24/7 Advice</h1>
                                            <p className="leading-relaxed mb-3">Our dedication to your needs goes beyond regular business hours. With our 24/7 advice service, we are always here to provide guidance and support whenever you need it. </p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 md:w-1/3 hover:scale-110 hover:duration-200 transition-all ease-in-out">
                                    <div className="h-full bg-white hover:border-2 hover:shadow-lg  hover:shadow-slate-400 hover:border-gray-400 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.istockphoto.com/id/1307287014/photo/food-delivery-paper-bag-with-groceries-in-cartoon-style-courier-handing-over-the-order.jpg?s=612x612&w=0&k=20&c=O01dQIqhFZP7R3JgU-Gj9X_iOSR_V0HV09IHWQIHnt0=" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-fondamento text-center font-medium text-gray-900 mb-3">Transparent Giving</h1>
                                            <p className="leading-relaxed mb-3">Our platform ensures transparency in every donation. You can track where your contributions go and witness the direct impact your generosity has on individuals and families facing food shortages.</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More

                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 hover:scale-110 hover:duration-200 transition-all ease-in-out">
                                    <div className="h-full hover:shadow-lg  hover:shadow-slate-400 bg-white hover:border-2 hover:border-gray-400 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.istockphoto.com/id/1490347666/photo/3d-rendering-cartoon-characters-hands-on-hands-cooperation-and-colleagues.webp?b=1&s=170667a&w=0&k=20&c=yBNegoR2UokXSO2xV-N5THaaOm-BxVM7B2La6xOiog0=" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-fondamento text-center font-medium text-gray-900 mb-3">Diverse Partnerships</h1>
                                            <p className="leading-relaxed mb-3">We collaborate with a network of trusted food banks, shelters, and organizations to ensure that your donations are efficiently distributed to those who need them most.</p>
                                            <div className="flex items-center flex-wrap">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 hover:scale-110 hover:duration-200 transition-all ease-in-out">
                                    <div className="h-full hover:shadow-lg  hover:shadow-slate-400 bg-white hover:border-2 hover:border-gray-400 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.istockphoto.com/id/1470274122/photo/isolated-in-the-crowd-hand-sign-to-say-hello.jpg?s=612x612&w=0&k=20&c=mMJ8HiMz7lK6mgFh_B0dmHksbLH2xso1nm7mV0aR41A=" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-fondamento text-center font-medium text-gray-900 mb-3">Impactful Change</h1>
                                            <p className="leading-relaxed mb-3">We are committed to making a meaningful impact on hunger insecurity. By choosing us, you become a vital part of a community dedicated to creating real change in the lives of those in need.</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Hero;
