import React from 'react'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';

export const Header = () => {
    const ActiveClass = "block py-2 px-3 rounded bg-gray-200 text-black";
    const InActiveClass = "block py-2 px-3 rounded text-black hover:bg-gray-100";
    const { cartList} = useCart();
    return (
        <header>
            <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 px-4 sm:px-8 md:px-12">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-serif whitespace-nowrap dark:text-white">Shopping Cart</span>
                    </Link>

                    {/* Centered Navigation */}
                    <div className="flex flex-1 justify-center">
                        <ul className="font-normal flex space-x-8 text-xl">
                            <li>
                                <NavLink to="/home" className={({ isActive }) => isActive ? ActiveClass : InActiveClass} aria-current="page" end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({ isActive }) => isActive ? ActiveClass : InActiveClass}>Cart</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section Placeholder */}
                    <div>
                    <Link to="/cart">
                            <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                                Cart:{cartList.length}
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
