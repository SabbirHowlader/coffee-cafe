import React from 'react';
import CoffeeExperiences from '../CoffeeExperiences/CoffeeExperiences';
import SpecialMemories from '../SpecialMemories/SpecialMemories';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <CoffeeExperiences></CoffeeExperiences>
            <SpecialMemories></SpecialMemories>
        </div>
    );
};

export default Home;