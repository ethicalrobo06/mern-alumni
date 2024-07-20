import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" pl-8 bg-gray-900 text-white w-full py-8 text-center">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Sitemap</a></li>
                        <li><a href="#" className="hover:underline">Terms</a></li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-400">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400">
                        <FaTwitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;