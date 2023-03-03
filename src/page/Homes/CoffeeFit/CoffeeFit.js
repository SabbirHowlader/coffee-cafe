import React from 'react';
import fit from '../../../assets/images/coffee fit/coffee fit.png'
import offer from '../../../assets/images/coffee fit/offer.png'
import day from '../../../assets/images/coffee fit/day.png'

const CoffeeFit = () => {
    return (
        <div className='lg:flex my-10'>
            <div className='w-full mx-auto'>
                <img className='h-full w-full mx-auto' src={fit} alt="coffee fit" />
            </div>
            <div className=''>
                <div className='p-5'>
                    <h2 className='text-4xl font-quesha mb-4'>Coffee Fit For Everyone</h2>
                    <p className='font-realway leading-9'>Our journey was inspired from the growing coffee culture in Dhaka. We support the growth of coffee culture
                        partnering with other cafés and provide opportunities for working students to gather valuable work experience.
                        Our vision is to make our customers experience our quality brew and create special memories. We value our
                        customers and want to make sure that when you enter our cafés you become part of Arabika.</p>
                </div>
                <div className='flex justify-evenly text-center'>
                    <div className='mx-auto'>
                      <img className='p-5' src={day} alt="day" />
                    </div>
                    <div className='bg-white'>
                      <img className='p-5' src={offer} alt="Friday offer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeFit;