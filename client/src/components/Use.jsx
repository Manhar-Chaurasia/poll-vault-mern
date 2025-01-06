import React from 'react'
import { Link } from 'react-router-dom'
import pollScreenshot from "../assets/poll-screenshot.png"

const Use = () => {
    return (
        <>
            <div className='w-full px-6 xl:px-40 max-w-screen-2xl mx-auto mb-24'>
                <div>
                    <div className='flex flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-10 space-y-8 lg:space-y-0'>
                        <div className='lg:w-2/5 flex flex-col space-y-5'>
                            <h1 className='text-3xl font-bold text-gray-200'>Use our advanced poll maker</h1>
                            <p className='text-lg text-gray-500 text-justify'>A straw poll is a voting that can be used to help people to easily determine the opinion of a group or the public on some issue. Straw polls are very useful when only the majority opinion is important and not the opinion of each individual participant.</p>
                            <div className='flex items-center flex-nowrap space-x-3 lg:space-x-5'>
                                <Link to="/create-poll" className="">
                                    <button className='md:px-5 md:py-2 px-3 py-1 text-lg rounded-md button is-transparent bg-indigo-500' >Create a poll</button>
                                </Link>
                                <Link to="/demo" className="">
                                    <button className='md:px-5 md:py-2 px-3 py-1 text-lg rounded-md button is-transparent bg-gray-700 text-gray-300' >View example</button>
                                </Link>
                            </div>
                        </div>

                        <div className='lg:w-3/5'>
                            <img src={pollScreenshot} className='flex-1 shadow-xl border-2 border-gray-700 rounded-md' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Use