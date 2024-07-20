import React, { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
import slide6 from '../assets/slide6.jpg'
import slide7 from '../assets/slide7.jpg'
import slide8 from '../assets/slide8.jpg'
import slide9 from '../assets/slide9.jpg'



const SliderComponent = () => {
    const [imageNum, setImageNum] = useState(1);

    const images = [
        {
            url: slide1
        },
        {
            url: slide2
        },
        {
            url: slide3
        },
        {
            url: slide4
        },
        {
            url: slide5
        },
        {
            url: slide6
        },
        {
            url: slide7
        },
        {
            url: slide8
        },
        {
            url: slide9
        },
    ];

    return (

        <div className='pl-[7rem] z-0'>
            <SimpleImageSlider
                width={1186}
                height={582}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                onStartSlide={(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay={3}
            />
        </div>
    );
};

export default SliderComponent;

