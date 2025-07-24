import React from 'react';
import { FaBookReader } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const milestones = [
    {
        text: "9 years of transforming tech careers",

    },
    {
        text: "1.5 Lac+ learners",
        subtext: "cracked dream tech roles at top tech companies",
        icon: <FaBookReader />,
    },
    {
        text: "1,400 Alumni in MAANG",
        subtext: "& more in 103/111 Unicorns",
        
    },
    {
        text: "1 Cr+ highest CTC",
        subtext: "after completing the course",

    },
    {
        text: "128% average hike",
        subtext: "via our placement cell",

    },
];

const Information = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="flex flex-col items-center gap-10">
                {milestones.map((item, index) => (
                    <div key={index} className="flex flex-col items-center relative">

                        {/* Text content */}
                        <div className="text-center z-10 pt-5">
                            <div className='text-5xl font-bold pt-20'>
                                <div className='w-[2px] px-40 pb-4 text-gray-600'>
                                    {item.icon}
                                </div>
                                {item.text}
                            </div>
                            {item.subtext && (
                                <div className="text-sm text-gray-400 mt-1">{item.subtext}</div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Button */}
                <button className="flex mt-8 px-6 py-2 gap-4 bg-orange-500 rounded-full font-semibold">
                    Explore Offeings <MdKeyboardDoubleArrowUp className='text-2xl'/>
                </button>
            </div>
        </div>
    );
};



export default Information;
