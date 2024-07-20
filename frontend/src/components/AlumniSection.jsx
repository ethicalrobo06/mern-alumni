import React from 'react';

const AlumniSection = ({ alumni }) => {
    return (
        <div className="bg-gray-100 p-8 flex  flex-row w-[1192px] h-[410px] text-[14px] mt-8 ml-[12rem]">
            {alumni.map((alumnus, index) => (
                <div key={index} className="relative  bg-white w-[272px] h-[330px] p-4 m-2 rounded-lg shadow-md flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                        <img src={alumnus.image} className="w-[70px] h-[70px] mr-4" alt="" />
                        <div className='mt-6'>
                            <h2 className="text-[18px] font-semibold mb-2">{alumnus.title}</h2>
                            <p>{alumnus.content}</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 ml-5 mb-6 text-white w-[80%] p-2  hover:text-blue-500 border hover:border-blue-500 hover:bg-white rounded mt-auto">{alumnus.button}</button>
                </div>
            ))}
        </div>
    );
};

export default AlumniSection;