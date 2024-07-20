import React from 'react'
import Institute from '../components/Institute'
import EventList from '../components/EventList'
import AlumniSection from '../components/AlumniSection'
import event1 from '../assets/fodevt1.webp'
import event2 from '../assets/fodevt2.webp'
import event3 from '../assets/fodevt3.webp'
import alumni1 from '../assets/city.svg'
import alumni2 from '../assets/batchmates.svg'
import alumni3 from '../assets/directory.svg'
import alumni4 from '../assets/profile.svg'
import news1 from '../assets/fodnews1.webp'
import news2 from '../assets/empty.webp'
import news3 from '../assets/fodnews2.webp'
import Career from '../components/Career'


function Fod() {
    const news = [
        {
            title: 'Alumni Talk - Pankaj Makwana',
            date: 'Nov 22, 2022',
            image: news1,
        },
        {
            title: 'Alumni Talk - Jaimini Chothwani',
            date: ' Sep 14, 2022',
            image: news2,
        },
        {
            title: '#AlumniTalk',
            date: 'Mar 25, 2022',
            image: news3,
        },

    ]
    const events = [
        {
            title: 'Parul Polytechnic Institute Alumni Meet 2024',
            date: 'Feb 10, 2024',
            image: event1,
        },
        {
            title: 'Alumni Cricket League 2021',
            date: 'Dec 18,2021',
            image: event2
        },
        {
            title: 'Vadodara Chapter of PU Alumni: Inaugural Meet & Greet (Contact us at:9328920064)',
            date: 'Aug 14, 2021',
            image: event3
        },
    ]
    const alumni = [
        {
            title: 'Alumni in your city',
            content: 'Find alumni living in your city & connect with them',
            button: 'Alumni in My City',
            image: alumni1,
        },
        {
            title: 'Your Batchmates',
            content: 'View our exclusive batchmates directory to know about whereabouts of your batchmates',
            button: 'My Batchmates',
            image: alumni2,
        },
        {
            title: 'Alumni Directory',
            content: 'Explore complete alumni directory & connect with alumni with your interests & domain.',
            button: 'View Directory',
            image: alumni3,
        },
        {
            title: 'Your Alumni Profile',
            content: 'Create & complete your alumni profile and remain connected with all opportunities matching your interest.',
            button: 'My Profile',
            image: alumni4,
        },
    ]
    return (
        <>
            <Institute />
            <EventList events={events} news={news} />
            <AlumniSection alumni={alumni} />
            <Career />
        </>
    )
}

export default Fod
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'