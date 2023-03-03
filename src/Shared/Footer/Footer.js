import React from 'react';
import logo from '../../assets/images/logo/coffee-beans 1.png'
import { FaAddressCard, FaFacebookF, FaGlassMartiniAlt, FaInstagram, FaMobile, FaPhoneAlt, FaPinterest, FaTwitter, FaYoutube, FaSearchPlus, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div>
                <div className='lg:flex gap-10 p-10'>
                    <img className='bg-white rounded-full mb-4' src={logo} alt="logo" />
                    <p className='font-realway leading-8'>
                        Freshly welcomes all its customers to come and create special memories. Our vision
                        is to make our customers experience our quality brew and create special memories.
                    </p>
                    <div className='flex gap-5 w-full lg:w-2/5 mt-4 '>
                        <FaFacebookF className='border hover:border-secondary  p-1 text-2xl'></FaFacebookF>
                        <FaInstagram className='border hover:border-secondary  p-1 text-2xl'></FaInstagram>
                        <FaTwitter className='border hover:border-secondary  p-1 text-2xl'></FaTwitter>
                        <FaPinterest className='border hover:border-secondary  p-1 text-2xl'></FaPinterest>
                        <FaYoutube className='border hover:border-secondary  p-1 text-2xl'></FaYoutube>
                    </div>
                </div>
                <div className='lg:flex justify-between px-10 pb-10 '>
                    <div className='flex gap-5 mb-2'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <p className='font-realway'>+1234567890</p>
                    </div>
                    <div className='flex gap-5'>
                       <FaSearchPlus></FaSearchPlus>
                       <p className='font-realway mb-2'>Bashundhara R/A, Dhaka</p>
                    </div>
                    <div className='flex gap-5'>
                        <FaEnvelope></FaEnvelope>
                        <p className='font-realway mb-2'>freshlycafe@support.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;