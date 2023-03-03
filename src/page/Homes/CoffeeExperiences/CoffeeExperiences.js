import React from 'react';
import coffee from '../../../assets/images/coffee expeiences/coffee-experiences.png'

const itemData1 = [
    {
        id: 1,
        title: 'Coffee Shop',
        text: 'Our Coffees are carefully selected for quality, flavor and social impact.'
    },
    {
        id: 2,
        title: 'Coffee Machine',
        text: 'Our Coffees are carefully selected for quality, flavor and social impact.'
    },
    {
        id: 3,
        title: 'High Quality',
        text: 'Our Coffees are carefully selected for quality, flavor and social impact.'
    },
]

const itemData2 = [
    {
        id: 1,
        title: 'The Perfect Cup',
        text: 'Our Coffees are carefully selected for quality, flavor and social impact.'
    },
    {
        id: 2,
        title: 'Barista Coffee',
        text: 'Our Coffees are carefully selected for quality, flavor and social impact.'
    },
    {
        id: 3,
        title: 'Supreme Beans',
        text: 'Our Coffees are carefully selected for quality, flavor and social impact.'
    },
]
const CoffeeExperiences = () => {
    return (
        <div className='my-10'>
            <h2 className='font-quesha text-4xl text-center mt-10'>Providing Unique Coffee Experiences</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 lg:px-10 mt-10'>
                <div className='text-right'>
                    {
                        itemData1.map(item => (<div className='p-5' key={item.id}>
                            <h4 className='text-3xl font-realway'>{item.title}</h4>
                            <p className='font-realway mt-4 leading-7'>{item.text}</p>
                        </div>))
                    }
                </div>
                <div>
                    <img className='w-full h-full mx-auto p-2 lg:p-0' src={coffee} alt="Coffee" />
                </div>
                <div>
                    {
                        itemData2.map(item2 => (<div className='p-5' key={item2.id}>
                            <h4 className='text-3xl font-realway'>{item2.title}</h4>
                            <p className='font-realway mt-4 leading-7'>{item2.text}</p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeExperiences;