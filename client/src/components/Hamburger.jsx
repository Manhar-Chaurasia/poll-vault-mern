// import React from 'react'

// const Hamburger = () => {
//     return (
//         <>
//             <div className='absolute mt-5 flex justify-between items-center px-6 w-full'>
//                 <img src="https://static.vecteezy.com/system/resources/thumbnails/000/605/214/small/5057-01.jpg" className='w-12 block lg:hidden' alt="" />

//                 <button className='md:hidden block p-3 rounded-md bg-gray-800 text-gray-400' onClick={handleHamburger}>
//                     <RxHamburgerMenu />
//                 </button>
//             </div>
//             {hamburger && <div className="nav md:h-16 h-auto shadow-md mx-auto bg-gray-900">
//                 <div className="wrapper md:flex justify-between items-center h-full md:px-40 p-6 md:py-0 max-w-screen-2xl mx-auto md:space-y-0 space-y-5">
//                     <div className='md:flex justify-start items-center md:space-x-10 text-gray-200'>
//                         <div className='flex justify-between items-center'>
//                             <img src="https://static.vecteezy.com/system/resources/thumbnails/000/605/214/small/5057-01.jpg" className='w-12 lg:block hidden' alt="" />
//                         </div>

//                         <div className='flex md:flex-row flex-col justify-start md:items-center items-start md:space-x-10 md:space-y-0 space-y-3 md:mt-0 mt-16 font-semibold'>
//                             <span>Create Poll</span>
//                             <span>Demo</span>
//                             <span>Pricing</span>
//                         </div>
//                     </div>


//                     <div className="flex md:flex-row flex-col md:items-center items-start md:space-x-5 md:border-0 border-t-2 border-gray-600 md:pt-0 pt-5">
//                         <Link to="/register" className="w-full md:w-auto">
//                             <button className='w-full md:w-auto px-3 py-1 rounded-md button is-transparent bg-indigo-500' >Sign Up</button>
//                         </Link>

//                         <Link to="/login" className='md:block hidden'>
//                             <button className='px-3 py-1 rounded-md button is-primary bg-indigo-500'>Login</button>
//                         </Link>
//                     </div>

//                     <div className='flex justify-center items-center md:hidden'>
//                         <span className='text-gray-400'>Already have and account?</span>
//                         <Link to="/login" className='md:block'>
//                             <button className='px-2 py-0 rounded-md button text-indigo-500'>Login</button>
//                         </Link>
//                     </div>

//                 </div>
//             </div>}
//         </>
//     )
// }

// export default Hamburger