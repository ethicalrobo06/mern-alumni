import React from 'react';

const NavigationBar = () => {
    return (
        <div className="block  lg:flex flex-grow   h-[42px] items-center justify-center flex-wrap  w-screen bg-purple-800">
            <div className="text-base text-left z-50 flex   lg:flex-grow  align-middle justify-center  w-full h-full">
                <div className="group  relative">
                    <button className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6 group-hover:bg-purple-800">
                        ALUMNI SUPPORT
                    </button>
                    <div className="absolute  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Document Requisition</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Downloads</a>
                        </div>
                    </div>
                </div>
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    NEWS & STORIES
                </a>
                <div className="group relative">
                    <button className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6 group-hover:bg-purple-800">
                        EVENTS
                    </button>
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Events</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Galleries</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">She Inspires: The Wall of Inspiration</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Alumni Achievements</a>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <button className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6 group-hover:bg-purple-800">
                        BATCHMATES
                    </button>
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Yearbook</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Invite Batchmates</a>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <button className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6 group-hover:bg-purple-800">
                        FIND ALUMNI
                    </button>
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Alumni Directory</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Alumni Nearby</a>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <button className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6 group-hover:bg-purple-800">
                        CAREERS
                    </button>
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Jobs</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Internship</a>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <button className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6 group-hover:bg-purple-800">
                        ABOUT
                    </button>
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">About Us</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Alumni Contributions</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">PUAA At a Glance</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;