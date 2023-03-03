import React from 'react';
import memorise1 from '../../../assets/images/special memories/Rectangle 3788.png'
import memorise2 from '../../../assets/images/special memories/Rectangle 3789.png'
import memorise3 from '../../../assets/images/special memories/Rectangle 3790.png'

const SpecialMemories = () => {
    return (
        <div className='p-5 lg:p-10'>
            <h2 className='text-4xl pb-12 '>We Are Open to Create Special Memories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  items-center mx-auto'>
                {/* memories-01  */}
                <div>
                    <p className='font-realway leading-8 mb-4'>The morning is like a quiet winter day,ideal for alone time
                        and for reading books. The noon is like Autumn, full of
                        colours and banters. The evening is like a summer night
                        bustling with people and ideal for hangouts. Arabika
                        welcomes all its customers to come and create special
                        memories.</p>
                    <img className='w-full h-full' src={memorise1} alt="memorise1" />
                </div>
                {/* memories-02  */}
                <div>
                    <img className='' style={{ height: 470 }} src={memorise2} alt="memories2" />
                    <p className='font-realway leading-8 mt-4'>Every cup is brewed with freshly roasted single origin beans. 100%
                        premium Arabica blend is used to ensure the exquisite taste of coffee.
                        These beans are ground and then the shots are timed to perfection;
                        ready to serve fresh and hot. The house blend is well balanced for both
                        strong and mild coffee drinks.</p>
                </div>
                {/* memories-03 */}
                <div>
                    <img src={memorise3} alt="memories3" />
                    <p className='font-realway leading-8 mt-4'>Ready Every morning. The experience
                        creates memories.</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialMemories;