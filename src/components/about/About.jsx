import React from 'react';

function About() {
  return (
    
    <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-10 mb">
      <div className=" p-8 md:p-12 lg:p-16">
        <div className="about_text text-lg md:text-xl lg:text-2xl font-medium font-Poppins text-[#FFEAC5] leading-relaxed max-w-4xl ">
          <h2 className="mb-4">
            I am Rezwan, a passionate React developer with 2+ years of experience in building dynamic and responsive web applications.
            Skilled in HTML, HTML5, CSS, CSS3, React, Tailwind CSS, and Redux.
          </h2>
          <h3>
            I help you create a website for your business at an affordable cost. Thousands of clients have achieved exceptional results while working with me. I'm dedicated to delivering work within time and budget that meets the client's requirements.
          </h3>
        </div>
        <div className="me text-base md:text-lg lg:text-xl font-Poppins font-normal text-[#909294] mt-8">
          <ul className="space-y-3">
            <li><span className="font-semibold text-[#FFEAC5]">Name:</span> Rezwan</li>
            <li>
              <span className="font-semibold text-[#FFEAC5]">Email:</span>{' '}
              <a href="mailto:mdrazwanislam8@gmail.com" className="text-[#FFEAC5] hover:underline">
                mdrazwanislam8@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#FFEAC5]">Phone:</span>{' '}
              <a href="tel:01788254971" className="text-[#FFEAC5] hover:underline">
                01788254971
              </a>
            </li>
            <li><span className="font-semibold text-[#FFEAC5]">From:</span> Bangladesh</li>
            <li><span className="font-semibold text-[#FFEAC5]">Language:</span> Bengali, English, Hindi</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default About;
