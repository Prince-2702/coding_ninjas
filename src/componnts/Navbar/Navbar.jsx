import React from 'react'
import Button from '../Button/Button'
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <div >
            <div>
                <div className="flex flex-col md:flex-row h-[70px] justify-center items-center gap-5 py-3">
                    <img src="src\assets\images\Screenshot 2025-07-21 183303.png" alt="" srcset="" />
                    <div className='grid grid-cols-3 gap-7 font-semibold text-indigo-900'>
                        <a href="#" className='flex items-center gap-[2px] '>Job Bootcamp
                            <span>
                                <MdKeyboardArrowDown />
                            </span>
                        </a>
                        <a href="#" className='flex items-center gap-[2px] '>IIT Certification
                              <span>
                                <MdKeyboardArrowDown />
                            </span>
                        </a>
                        <a href="#" className='flex items-center gap-[2px] '>New Launches
                              <span>
                                <MdKeyboardArrowDown />
                            </span></a> 
                    </div>
                    <div className='flex px-20  font-bold'>
                        <Button 
                            text="Login"
                            bgColor={"bg-orange-600"}
                            textColor={"text-white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar