import React from 'react';
import CoffeeExperiences from '../CoffeeExperiences/CoffeeExperiences';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import SpecialMemories from '../SpecialMemories/SpecialMemories';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <CoffeeExperiences></CoffeeExperiences>
            <SpecialMemories></SpecialMemories>
            <CoffeeMenu></CoffeeMenu>
        </div>
    );
};

export default Home;