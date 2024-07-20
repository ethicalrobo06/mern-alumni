import React from 'react'
const Card = ({ title, content, className }) => {
    return (
        // inside Faculty next block
        // <button className="transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110  hover:from-pink-500  hover:to-yellow-500  bg-gradient-to-r from-sky-500 to-indigo-500 h-[200px]  rounded-lg shadow-md p-4 ">
        // {/* <button className="transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110  hover:from-purple-700  hover:to-[#F28500]  bg-gradient-to-r from-sky-500 to-indigo-500 h-[200px]  rounded-lg shadow-md p-4 "> */ }
        // {/* // <button className="transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110  from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937] h-[200px]  rounded-lg shadow-md p-4 "> */ }
        // < button className="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500 h-[200px]  rounded-lg shadow-md p-4 " >
        < button className={`transition  ${className}   ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 h-[250px] w-[388px] rounded-lg shadow-md p-4`} >
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className=" text-left ">
                {
                    content.map((item, i) => (
                        <li key={i} className=' text-white'>{item}</li>
                    ))
                }
            </div >
        </button >
    );
};

export default Card