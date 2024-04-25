import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item, index) => (
        <div className='h-100 w-full'>
        <img  key={index} className='cursor-pointer' role='presentation' src={item.image} alt=''/>
        </div>
    ));

    return (
        <AliceCarousel items={items} 
        disableButtonsControls
        autoPlay
        autoPlayInterval={1300}
        infinite/>
    );
}

export default MainCarousel;
