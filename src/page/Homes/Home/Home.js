import React from 'react';
import useTitle from '../../../Hook/UseTitle/UseTitle';
import CoffeeExperiences from '../CoffeeExperiences/CoffeeExperiences';
import CoffeeFit from '../CoffeeFit/CoffeeFit';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import CoffeeMoments from '../CoffeeMoments/CoffeeMoments';
import PopularProduct from '../PopularProduct/PopularProduct';
import SpecialMemories from '../SpecialMemories/SpecialMemories';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    useTitle('Home')
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