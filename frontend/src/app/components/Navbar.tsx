import React from 'react';

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-purple-500 from-50% via-indigo-500 via-20% to-blue-500 to-30% p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Thesis Corner</span>
                    </div>
                    <div className="block lg:hidden">
                        <button id="nav" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow mx-auto lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#about-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                                About Us
                            </a>
                            <a href="#resources" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                                Resources
                            </a>
                        </div>
                        <div>
                            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Log In</a>
                            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Order Now</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );

}