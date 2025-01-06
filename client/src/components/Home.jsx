import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Use from './Use';
import Features from './Features';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <section className="w-full">
                <div className=''>
                    <Navbar />
                </div>

                <div className="relative w-full h-[600px] flex flex-col justify-center items-start px-6 lg:px-40 max-w-screen-2xl mx-auto">
                    <div className="absolute inset-0 bg-hero bg-cover bg-no-repeat bg-center opacity-40 mix-blend-overlay"></div>

                    <div className=' '>
                        <h1 className="text-center sm:text-left text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Create a poll</span>
                            <span className="block text-indigo-300 mt-2">in seconds</span>
                        </h1>
                        <p className="mt-6 text-justify mx-auto sm:ml-0 sm:text-left text-lg sm:text-xl text-indigo-200 sm:max-w-2xl">
                            Want to ask your friends where to go friday night or which game to play? Create a poll and get answers in no time.
                        </p>
                    </div>

                    <div className="mt-10 lg:max-w-sm w-full sm:flex sm:justify-start">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Link to="/create-poll" className="z-10 flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">
                                Create a poll
                            </Link>
                            <Link to="/demo/" className="flex z-10 items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            <section className='w-full md:mt-24 md:mb-16'>
                <div className='px-6 lg:px-40 max-w-screen-2xl mx-auto'>
                    <p className='text-lg text-center mt-10 mb-1 sm:mb-0 text-gray-500'>Trusted by over 1,500,000 users worldwide</p>
                    <div className='flex flex-wrap sm:flex-nowrap justify-center items-center space-y-10 sm:space-y-0 sm:space-x-11 md:space-x-16 lg:space-x-20 sm:px-10 pb-10 pt-7'>
                        <div className='flex flex-col items-center w-full mx-aut sm:w-auto '>
                            <span className='text-4xl font-bold mb-1 text-indigo-400'>1.5M+</span>
                            <span className='text-lg text-gray-500'>Users</span>
                        </div>
                        <div className='h-32 w-px hidden sm:block bg-gray-600'></div>
                        <div className='flex flex-col items-center  w-full mx-aut sm:w-auto'>
                            <span className='text-4xl font-bold mb-1 text-indigo-400'>11M+</span>
                            <span className='text-lg text-gray-500'>Polls</span>
                        </div>
                        <div className='h-32 w-px hidden sm:block bg-gray-600'></div>
                        <div className='flex flex-col items-center w-full mx-aut sm:w-auto'>
                            <span className='text-4xl font-bold mb-1 text-indigo-400'>260M+</span>
                            <span className='text-lg text-gray-500'>Votes</span>
                        </div>
                    </div>
                </div>
            </section>

            <Use />
            <Features />
            <Footer />

        </>
    )
}

export default Home