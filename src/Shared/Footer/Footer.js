import React from 'react';
import logo from '../../assets/images/logo/coffee-beans 1.png'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterest, FaTwitter, FaYoutube, FaSearchPlus, FaEnvelope } from "react-icons/fa";
import icon from '../../assets/images/logo/Group 446.png'

const Footer = () => {
    return (
        <footer>
            <div>
                {/* divider selction */}
                <div class="flex items-center w-full mt-10">
                    <div class="grid h-0.5 flex-grow card bg-white rounded-box place-items-center opacity-25"></div>
                    <div class="divider"><img className='border border-white border-opacity-25 h-16 w-16 rounded-full' src={icon} alt="" /></div>
                    <div class="grid h-0.5 flex-grow card bg-white  rounded-box place-items-center opacity-25"></div>
                </div>
                <p className='font-realway text-center my-5'>Go To Top</p>

                 {/* main footer  */}
                <div className='lg:flex gap-10 px-10 pb-5 '>
                    <img className='bg-white rounded-full mb-4' src={logo} alt="logo" />
                    <p className='font-realway leading-8'>
                        Freshly welcomes all its customers to come and create special memories. Our vision
                        is to make our customers experience our quality brew and create special memories.
                    </p>
                    <div className='flex gap-7 w-full lg:w-1/4  mt-4 '>
                        <FaFacebookF className='border hover:border-secondary  p-1 text-2xl'></FaFacebookF>
                        <FaInstagram className='border hover:border-secondary  p-1 text-2xl'></FaInstagram>
                        <FaTwitter className='border hover:border-secondary  p-1 text-2xl'></FaTwitter>
                        <FaPinterest className='border hover:border-secondary  p-1 text-2xl'></FaPinterest>
                        <FaYoutube className='border hover:border-secondary  p-1 text-2xl'></FaYoutube>
                    </div>
                </div>
                <div className='lg:flex justify-between px-10 pb-14 '>
                    <div className='flex gap-5 items-center mb-2'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <p className='font-realway'>+1234567890</p>
                    </div>
                    <div className='flex gap-5 items-center mb-2'>
                        <FaSearchPlus></FaSearchPlus>
                        <p className='font-realway'>Bashundhara R/A, Dhaka</p>
                    </div>
                    <div className='flex gap-5 items-center mb-2'>
                        <FaEnvelope></FaEnvelope>
                        <p className='font-realway'>freshlycafe@support.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;