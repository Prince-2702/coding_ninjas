import React from 'react'

const Button = ({text, bgColor, textColor, handler = () => {}}) => {
  return (
   <button
   className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8  rounded-2xl relative z-10`}
   >
    {text}
   </button>
  )
}

export default Button