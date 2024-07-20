import React from 'react'
import Institute from '../components/Institute'
import event1 from '../assets/foetevt1.webp'
import event2 from '../assets/foetevt2.webp'
import event3 from '../assets/foetevt3.webp'
import news1 from '../assets/news1.webp'
import empty from '../assets/empty.webp'
import EventList from '../components/EventList'
import AlumniSection from '../components/AlumniSection'
import Career from '../components/Career'
import alumni1 from '../assets/city.svg'
import alumni2 from '../assets/batchmates.svg'
import alumni3 from '../assets/directory.svg'
import alumni4 from '../assets/profile.svg'
function Foet() {
    const news = [
        {
            title: 'Seniors ka Formula - Sandhyarani Dash',
            date: ' Dec 14, 2022',
            image: news1,
        },
        {
            title: 'Juhi Sharma - Instagram Live Session',
            date: ' Sep 24, 2022',
            image: empty,
        },
        {
            title: 'Alumni Spotlight - Pratik Dave',
            date: 'Sep 17, 2022',
            image: empty,
        },

    ]
    const events = [
        {
            title: 'Alumni Meet: Parul Institute of Technology - 2022',
            date: 'Apr 30, 2022',
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
        <div>
            {/* <Caro data={slides} /> */}
            <Institute />
            <EventList events={events} news={news} />
            <AlumniSection alumni={alumni} />
            <Career />
        </div>
    )
}



export default Foet