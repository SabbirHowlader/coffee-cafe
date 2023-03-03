import React, { useState } from 'react';
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
        title: 'Log In',
        link: '/'
    },
]
const Navbar = () => {
    return (
        <header>
            <nav className='lg:flex justify-evenly items-center font-realway py-4 gap-4'>

                <div className='dropdown'>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className='lg:block'>
                        <ul tabIndex={0} className='lg:flex gap-14 mx-4 lg:mx-0'>
                            {
                                naviteamData1.map(item => (
                                    <li className='my-3 lg:my-0 hover:underline hover:underline-offset-8 decoration-secondary' key={item.id}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>))
                            }
                        </ul>
                        <div class="grid h-0 lg:h-0.5 flex-grow card bg-white rounded-box place-items-center opacity-25"></div>
                    </div>
                </div>
                <div id='navbar-menu' className='hidden lg:block divide-none'>
                    <img className='bg-white h-16 w-16 rounded-full' src={logo} alt="logo" />
                </div>
                <div id='navbar-menu' className='lg:block'>
                    <ul tabIndex={0} className='lg:flex gap-14 mx-4 lg:mx-0'>
                        {
                            naviteamData2.map(item2 => (
                                <li className='my-3 lg:my-0 hover:underline hover:underline-offset-8 decoration-secondary' key={item2.id}>
                                    <Link to={item2.link}>{item2.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div class="grid h-0 lg:h-0.5 flex-grow card bg-white rounded-box place-items-center opacity-25"></div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;