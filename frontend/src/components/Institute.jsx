import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import NavigationBar from './NavigationBar'
import SliderComponent from './SlideComponent'
import slide1 from '../assets/slide2.jpg'
import slide2 from '../assets/slide5.jpg'
import slide3 from '../assets/foet3.png'
import slide4 from '../assets/foet4.png'

const Institute = () => {
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
        }
    ]
    return (
        <div>
            <Header />
            <NavigationBar />
            <SliderComponent images={images} showNavs={false} />
        </div>
    )
}

export default Institute