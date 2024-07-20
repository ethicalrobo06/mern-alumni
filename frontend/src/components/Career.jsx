import React from 'react'
import { LiaIndustrySolid } from "react-icons/lia";

function Career() {
    const career = [
        {
            title: 'Purchase executive',
            content: 'RobotSkull  Vadodara',
            deadline: 'May 12, 2024'
        },
        {
            title: 'Sales Executive',
            content: 'RobotSkull  Vadodara',
            deadline: 'May 12, 2024'
        },
        {
            title: 'Junior Associate',
            content: 'Befree LTD.  Gandhinagar',
            deadline: 'Apr 12, 2024'
        }
    ]
    return (
        <div className="bg-gray-100 p-8 flex  flex-col  text-[14px] rounded w-[72rem] mt-8 ml-[12rem]">
            <div className='flex flex-row justify-between pl-3 pb-2 '>
                <h1 className='text-[28px]'>Career Opportunities</h1>
                <button className='text-red-600 rounded border text-[16px] px-4 border-red-600 hover:border-white hover:text-white hover:bg-red-600'>View All</button>
            </div>
            <div className='flex'>
                {career.map((opportunity, index) => (
                    <div key={index} className=" bg-white max-w-[369px] max-h-[224px]  w-[ 317.737px] p-4 m-2 rounded-lg shadow-md flex flex-col justify-between">
                        <div className='mt-6 w-[317.737px] h-[222px]' >
                            <h2 className="text-[18px] font-medium mb-2">{opportunity.title}</h2>
                            <p>{opportunity.content}</p>
                            <p>Deadline:{opportunity.deadline}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Career