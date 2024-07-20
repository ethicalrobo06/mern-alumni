import React from 'react';

const SmartProducts = () => {
    return (
        <div className="bg-white border border-gray-300 rounded shadow-md p-4 mt-2 absolute">
            <p className="font-medium text-lg mb-2">Smart Products</p>
            <ul className="list-disc list-inside">
                <li>Smart Thermostat</li>
                <li>Smart Light Bulb</li>
                <li>Smart Plug</li>
                <li>Smart Door Lock</li>
                <li>Smart Camera</li>
            </ul>
        </div>
    );
};

const Menu = () => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <ul className="flex items-center">
                <li className="mr-4 relative">
                    <a
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg py-2 px-4 rounded"
                        href="#"
                        onMouseOver={(e) => {
                            e.currentTarget.parentElement.querySelector('div').classList.remove('hidden');
                            const smartProducts = e.currentTarget.parentElement.querySelector('div.smart-products');
                            smartProducts.classList.remove('hidden');
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.parentElement.querySelector('div').classList.add('hidden');
                            const smartProducts = e.currentTarget.parentElement.querySelector('div.smart-products');
                            smartProducts.classList.add('hidden');
                        }}
                    >
                        Product
                    </a>
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md p-4 mt-2 hidden">
                        <p className="font-medium text-lg mb-2">Products</p>
                        <ul className="list-disc list-inside">
                            <li>Product 1</li>
                            <li>Product 2</li>
                            <li>Product 3</li>
                            <li className="relative">
                                Smart Products
                                <SmartProducts className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md p-4 mt-2 hidden smart-products" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mr-4 relative">
                    <a
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg py-2 px-4 rounded"
                        href="#"
                    >
                        Solutions
                    </a>
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md p-4 mt-2 hidden">
                        <p>Solutions block content goes here.</p>
                    </div>
                </li>
                <li className="mr-4 relative">
                    <a
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg py-2 px-4 rounded"
                        href="#"
                    >
                        Resources
                    </a>
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md p-4 mt-2 hidden">
                        <p>Resources block content goes here.</p>
                    </div>
                </li>
                <li className="mr-4 relative">
                    <a
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg py-2 px-4 rounded"
                        href="#"
                    >
                        Pricing
                    </a>
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md p-4 mt-2 hidden">
                        <p>Pricing block content goes here.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Menu;