import React from 'react';
import CoffeeExperiences from '../CoffeeExperiences/CoffeeExperiences';
import CoffeeFit from '../CoffeeFit/CoffeeFit';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import CoffeeMoments from '../CoffeeMoments/CoffeeMoments';
import PopularProduct from '../PopularProduct/PopularProduct';
import SpecialMemories from '../SpecialMemories/SpecialMemories';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <CoffeeExperiences></CoffeeExperiences>
            <SpecialMemories></SpecialMemories>
            <CoffeeMenu></CoffeeMenu>
            <PopularProduct></PopularProduct>
            <CoffeeFit></CoffeeFit>
            <CoffeeMoments></CoffeeMoments>
        </div>
    );
};

export default Home;