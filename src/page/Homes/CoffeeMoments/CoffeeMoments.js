import React from 'react';
import img1 from '../../../assets/images/coffee moment/coffee-1.png'
import img2 from '../../../assets/images/coffee moment/coffee-2.png'
import img3 from '../../../assets/images/coffee moment/coffee-3.png'
import img4 from '../../../assets/images/coffee moment/coffee-4.png'
import img5 from '../../../assets/images/coffee moment/coffee-5.png'
import img6 from '../../../assets/images/coffee moment/coffee-6.png'
import img7 from '../../../assets/images/coffee moment/coffee-7.png'
import img8 from '../../../assets/images/coffee moment/coffee-8.png'

const CoffeeMoments = () => {
    return (
        <div className='my-12'>
            <h2 className='text-4xl text-center font-quesha my-10'>Coffee Moments</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img1} alt="coffee" />
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img2} alt="coffee" />
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img3} alt="coffee" />
                <img className='lg:col-span-2 w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img4} alt="coffee" />
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img5} alt="coffee" />
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img6} alt="coffee" />
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img7} alt="coffee" />
                <img className='w-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img8} alt="coffee" />
            </div>
        </div>
    );
};

export default CoffeeMoments;