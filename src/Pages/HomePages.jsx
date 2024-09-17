import React, { useEffect } from 'react'
import Home from '../components/home/Home'
import AboutPages from './AboutPages'
import SkillsPages from './SkillsPages'
import WorksPages from './WorksPages'
import ContactPages from './ContactPages'

function HomePages() {





  return (
    <>


<section id="home" className=" "> <Home/></section>
<section id="about" className=""><AboutPages/></section>
<section id="skills" className=""> <SkillsPages/></section>
<section id="portfolio" className="">  <WorksPages/></section>
<section id="contact" className=" ">  <ContactPages/></section>

       
        
        
        
        
       
       
       
      
        
       
      
        




       
        
        
    
        
      
   
       
    </>
  )
}

export default HomePages