import React, { useEffect } from 'react'
import {gsap} from "gsap";

function Cursor() {

    // useEffect(()=>{
    //     const handleMouseMove = (e) =>{
    //         const {clientx, clienty} = e;
    //         gsap.to("#cursor" ,{
    //             x:clientx - 20/2,
    //             y:clienty - 20/2,
    //         })
    //     } ;

    //     window.addEventListener("mousemove", handleMouseMove);

    //     return()=>{
    //         window.removeEventListener("mousemove", handleMouseMove);
    //     }
    // }, [])

    


  return (
    <>
    {/* <div id='cursor' className='h-5 w-5 bg-white rounded-full z-10 absolute top-0 left-0'></div> */}
    </>
  )
}

export default Cursor