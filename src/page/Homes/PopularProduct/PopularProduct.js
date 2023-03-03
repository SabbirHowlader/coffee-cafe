import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../../assets/images/popular product/product-1 (1).png'
import product2 from '../../../assets/images/popular product/product-1 (2).png'
import product3 from '../../../assets/images/popular product/product-1 (3).png'

const productData = [
    {
        id: 1,
        image: product1,
        title: 'Italian Coffee Beans',
        amount: '1085.00'
    },
    {
        id: 2,
        image: product2,
        title: 'Brazil Coffee Beans',
        amount: '1550.00'
    },
    {
        id: 3,
        image: product3,
        title: 'American Coffee Beans',
        amount: '1085.00'
    },
]

const PopularProduct = () => {
    return (
        <div>
            <div className='px-10 lg:flex justify-between justify-items-center'>
                <h2 className='text-4xl font-quesha'>Our Popular Products</h2>
                <button class="btn btn-outline hover:bg-secondary text-white normal-case w-32 p-0 mt-5 lg:mt-0">See All</button>
            </div>
            <div className="card shadow-xxl">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:p-10 gap-5 '>
                    {
                        productData.map(item => (<div className='p-5 lg:p-10 grid justify-items-center w-96 mx-auto leading-10 rounded-lg' style={{ backgroundColor: '#0E0E0E' }} key={item.id}>
                            <img className='mb-4 ' src={item.image} alt="menu" />
                            <h5 className='text-2xl font-quesha'>{item.title}</h5>
                            <p className='font-realway'>{item.amount}৳</p>
                            <div className='flex gap-2 text-secondary'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <button class="btn btn-outline hover:bg-secondary text-white normal-case w-32 mt-5">Add To Cart</button>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;