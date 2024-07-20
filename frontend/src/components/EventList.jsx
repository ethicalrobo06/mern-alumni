import React from 'react'
import Event from './Event';
// complete event box container
const EventList = ({ events, news }) => {
    return (
        <>
            <div className='flex'>
                <div className='w-[498px] ml-[195px] rounded mt-8 h-[450px] border '>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-[28px] ml-2 font-medium">Events</h1>
                        <button className="text-red-600 rounded px-4 py-2 mt-2 mr-4  border border-red-600 hover:border-white hover:text-white hover:bg-red-600">View All</button>
                    </div>
                    <hr />
                    <div className="flex flex-col ">
                        {events.map((event, index) => (
                            <Event key={index} {...event} />
                        ))}
                    </div>
                </div>
                {/* same code for news and stories */}
                <div className='w-[498px] ml-[195px] rounded mt-8 h-[450px] border '>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-[28px] ml-2 font-medium">News & Stories</h1>
                        <button className="text-red-600 rounded px-4 py-2 mt-2 mr-4  border border-red-600 hover:border-white hover:text-white hover:bg-red-600">View All</button>
                    </div>
                    <hr />
                    <div className="flex flex-col ">
                        {news.map((event, index) => (
                            <Event key={index} {...event} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventList;