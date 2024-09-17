import React from 'react'
import { Link } from 'react-router-dom'

function SocialButton({social_icons, social_links}) {
  return (
    <>
    <Link  target="_blank" className='w-[50px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]' to = {social_links}>
        {social_icons}

    </Link>
   </>
  )
}

export default SocialButton