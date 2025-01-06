import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const AboutUs = () => {
    return (
        <>
            <div className='min-h-screen w-full bg-gray-900 text-white'>
                <div className=''>
                    <Navbar />
                </div>
                <div className='w-full py-12 px-6 xl:px-40 max-w-screen-2xl mx-auto'>
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 mt-12 md:mt-0'>About Us</h1>
                    <p className='text-lg text-gray-500 mb-4'>
                        Welcome to our platform, where you can create quick polls and gather opinions on any topic. We believe that everyone’s voice matters, and our goal is to make it easy for you to share your thoughts and hear from others.
                    </p>
                    <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
                    <p className='text-lg text-gray-500 mb-4'>
                        Our mission is to empower individuals and communities by providing a simple and effective tool for gathering opinions. Whether you're making decisions, planning events, or just curious about what others think, we’ve got you covered!
                    </p>
                    <h2 className='text-2xl font-semibold mb-4'>Features</h2>
                    <ul className='list-disc list-inside text-lg text-gray-500 mb-4'>
                        <li>✔️ Easy-to-use interface for creating polls</li>
                        <li>✔️ Real-time results and analytics</li>
                        <li>✔️ Shareable links for your polls</li>
                        <li>✔️ Responsive design for all devices</li>
                    </ul>
                    <h2 className='text-2xl font-semibold mb-4'>Join Us!</h2>
                    <p className='text-lg text-gray-500 mb-4'>
                        Join our community today and start creating polls that matter to you! Together, let's make every opinion count.
                    </p>
                    <div className='mt-8 text-center'>
                        <Link to="/register">
                            <button className='px-5 py-2 mt-2 rounded-md button is-transparent bg-indigo-500' >Get Started</button>
                        </Link>
                    </div>
                </div>


                <div className="border-t-2 border-gray-700">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AboutUs