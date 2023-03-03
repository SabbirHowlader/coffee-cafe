import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/coffee-beans 1.png'


const naviteamData1 = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 1,
        title: 'About Us',
        link: '/'
    },
    {
        id: 1,
        title: 'Our Partner',
        link: '/'
    },
    {
        id: 1,
        title: 'Menu',
        link: '/'
    },
]

const naviteamData2 = [
    {
        id: 1,
        title: 'Blog News',
        link: '/'
    },
    {
        id: 1,
        title: 'Contact Us',
        link: '/'
    },
    {
        id: 1,
        title: 'Cart',
        link: '/'
    },
    {
        id: 1,
        title: 'Login',
        link: '/'
    },
]
const Navbar = () => {
    return (
        <header>
            <nav className='lg:flex justify-evenly items-center font-realway py-4'>
                <span className='lg:hidden text-3xl cursor-pointer block text-white '>
                    <button data-collapse-toggle="navbar-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-menu" aria-expanded="false">
                        <span class="sr-only"></span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </span>
                <div id='navbar-menu' className='lg:block'>
                    <ul className='lg:flex gap-14 mx-4 lg:mx-0 '>
                        {
                            naviteamData1.map(item => (
                                <li className='my-3 lg:my-0 hover:underline hover:underline-offset-8 decoration-secondary' key={item.id}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>))
                        }
                    </ul>

                </div>
                <div id='navbar-menu' className='hidden lg:block'>
                    <img className='bg-white h-16 w-16 rounded-full' src={logo} alt="logo" />
                </div>
                <div id='navbar-menu' className='lg:block'>
                    <ul className='lg:flex gap-14 mx-4 lg:mx-0'>
                        {
                            naviteamData2.map(item2 => (
                                <li className='my-3 lg:my-0 hover:underline hover:underline-offset-8 decoration-secondary' key={item2.id}>
                                    <Link to={item2.link}>{item2.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;