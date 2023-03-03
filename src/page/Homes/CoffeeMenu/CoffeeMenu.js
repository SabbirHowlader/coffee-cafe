import React from 'react';
import menu1 from '../../../assets/images/coffee menu/menu-1.png'
import menu2 from '../../../assets/images/coffee menu/menu-2.png'
import menu3 from '../../../assets/images/coffee menu/menu-3.png'
import menu4 from '../../../assets/images/coffee menu/menu-4.png'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const menuData = [
    {
        id: 1,
        img: menu1,
        title: 'Americano',
        amount: '150.00'
    },
    {
        id: 2,
        img: menu2,
        title: 'Babyccino',
        amount: '100.00'
    },
    {
        id: 3,
        img: menu3,
        title: 'Cost Rica',
        amount: '250.00'
    },
    {
        id: 4,
        img: menu4,
        title: 'Ethophian',
        amount: '320.00'
    },
]

const CoffeeMenu = () => {
    return (
        <div className='text-center my-5'>
            <h2 className='text-4xl font-quesha mt-10'>To Discover More Look Into Our Coffee Menu</h2>
            <button class="btn btn-outline hover:bg-secondary text-white normal-case w-32 my-5">See All</button>
            <div className="card shadow-xxl">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:p-10 gap-5 '>
                    {
                        menuData.map(item => (<div className='p-10 grid justify-items-center w-72 mx-auto leading-10 rounded-lg' style={{ backgroundColor: '#0E0E0E' }} key={item.id}>
                            <img className='mb-4 ' src={item.img} alt="menu" />
                            <h5 className='text-2xl font-quesha'>{item.title}</h5>
                            <p className='font-realway'>{item.amount}৳</p>
                            <div className='flex gap-2 text-secondary'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStarHalfAlt></FaStarHalfAlt>
                            </div>
                            <button class="btn btn-outline hover:bg-secondary text-white normal-case w-32 mt-5">Add To Cart</button>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeMenu;