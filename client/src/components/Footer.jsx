import React from 'react'
import pollVaultLogo from "../assets/poll-vault-logo.png"

const Footer = () => {
    return (
        <>
            <div className='w-full px-6 xl:px-40 max-w-screen-2xl mx-auto'>
                <footer className="text-gray-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <img src={pollVaultLogo} className='w-44' alt="" />
                        </div>
                        <div className="">
                        <p className="text-sm ml-1">© 2023 All rights reserved.</p>

                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer