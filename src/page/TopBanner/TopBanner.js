import React from 'react';
import banner from '../../assets/images/top banner/Rectangle 3777.png'
import logo from '../../assets/images/top banner/logo.png'

const TopBanner = () => {
  return (
    <div class="lg:flex">
      <div className='bg-white text-black'>
        <img src={logo} alt="logo"/>
        <div className='p-10 pt-32'>
          <h1 className='font-quesha text-5xl'>Freshly Brewed Coffee</h1>
          <p class="py-6 font-realway">Everyday in Arabika is like the colourful seasons
            of Bangladesh. Arabika welcomes all its
            customers to come and create special memories.</p>
          <button className="btn bg-secondary hover:bg-secondary w-32 border-none text-white rounded-lg normal-case font-realway">Order Now</button>
        </div>
      </div>
      <img className='lg:w-2/3 mx-auto' src={banner} alt="Top Banner"/>
    </div>
  );
};

export default TopBanner;