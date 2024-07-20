import React from 'react';
import { BiCalendarMinus } from "react-icons/bi";

const Event = ({ title, date, image }) => {
    return (
        <div className="bg-white leading-5 p-2  w-[498px] h-[120px] shadow-md mb-0 border-b-2 border-r-0 border-gray-300">
            {image && (
                <div className="w-[117.25px] h-[104px] object-cover rounded-lg mb-4 mr-4 float-left">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            )}
            <div className="flex text-left flex-col justify-center h-full">
                <h2 className="text-[16px] text-wrap font-semibold mb-4">{title}</h2>
                <p className="text-middle text-[14px] align-center text-gray-700 mb-4">
                    <BiCalendarMinus className='inline' /> {date}
                </p>
            </div>
        </div>
    );
};

export default Event;