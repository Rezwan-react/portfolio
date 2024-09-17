import React, { useEffect } from 'react';
import SkillsCard from '../SkillsCard/SkillsCard';
import AOS from 'aos';
function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 900, 
      once: true, 
    });
  }, []);


  return (

    <div className="container mx-auto mt-10 px-4 md:px-8 lg:px-12 ">
      <div className=" p-6 md:p-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-Poppins font-bold text-[#FFEAC5] mb-8">
            My Skills
          </h2>
        </div>
        <div   className="flex flex-wrap justify-center gap-6">
          <SkillsCard data-aos="fade-left" skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/react.png" alt="React" />} skillsHead='React' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/html.png" alt="HTML" />} skillsHead='HTML' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/tailwind.png" alt="Tailwind" />} skillsHead='Tailwind' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/css.png" alt="CSS" />} skillsHead='CSS' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/bootstrap.png" alt="Bootstrap" />} skillsHead='Bootstrap' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/figma.png" alt="Figma" />} skillsHead='Figma' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/js.png" alt="JavaScript" />} skillsHead='JavaScript' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/firebase.png" alt="JavaScript" />} skillsHead='Firebase' />
          <SkillsCard skillsImg={<img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' src="images/react-redux.png" alt="JavaScript" />} skillsHead='React-redux' />
        </div>
      </div>
    </div>
   
  );
}

export default Skills;
