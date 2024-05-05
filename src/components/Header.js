import React from 'react';


const Header = () => {
    return (
        <header className="bg-gray-800">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <h1 className="text-white text-lg font-bold">Logo</h1>
                </div>
                <ul className="flex items-center space-x-4">
                    <li className="relative group">
                        <button className="text-white hover:text-gray-300">Case Managment</button>
                        <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block w-full">
                            <li className='hover:bg-white hover:text-black cursor-pointer '>
                            Add or Export Cases</li>
                            <li className='hover:bg-white hover:text-black cursor-pointer'>Search For Cases Efficiently</li>
                            <li className='hover:bg-white hover:text-black cursor-pointer'>Activity History</li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <button className="text-white hover:text-gray-300">Hearing Dates Management</button>
                        <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block">
                            <li className='hover:bg-white hover:text-black cursor-pointer'>Dropdown 1</li>
                            <li className='hover:bg-white hover:text-black cursor-pointer'>Dropdown 2</li>
                            <li className='hover:bg-white hover:text-black cursor-pointer'>Dropdown 3</li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <button className="text-white hover:text-gray-300">Sync With the Courts</button>
                        <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block">
                            <li>Dropdown 1</li>
                            <li>Dropdown 2</li>
                            <li>Dropdown 3</li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <button className="text-white hover:text-gray-300">CRM</button>
                        <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block">
                            <li>Dropdown 1</li>
                            <li>Dropdown 2</li>
                            <li>Dropdown 3</li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <button className="text-white hover:text-gray-300">Report and Dashboard</button>
                        <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block">
                            <li>Dropdown 1</li>
                            <li>Dropdown 2</li>
                            <li>Dropdown 3</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;