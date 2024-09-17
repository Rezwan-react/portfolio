import React from 'react';
import Card from '../card/Card';

function Works() {
  return (
  
    <div className="container mx-auto mt-10 px-4 md:px-8 lg:px-12">
      <div className=" p-6 md:p-8 lg:p-12">
        <h2 className="text-3xl md:text-4xl font-Poppins font-bold text-[#FFEAC5] text-center mb-14">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Card 
            cardImg={<img className='w-full h-48 object-cover rounded-t-lg' src="images/fist.png" alt="Portfolio" />} 
            cardHead='Portfolio' 
            cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' 
          />
          <Card 
            cardImg={<img className='w-full h-48 object-cover rounded-t-lg' src="images/numta.png" alt="Numta" />} 
            cardHead='Numta' 
            cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' 
          />
          <Card 
            cardImg={<img className='w-full h-48 object-cover rounded-t-lg' src="images/IPDC.png" alt="IPDC" />} 
            cardHead='IPDC' 
            cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' 
          />
          <Card 
            cardImg={<img className='w-full h-48 object-cover rounded-t-lg' src="images/Furniture.png" alt="Furniture" />} 
            cardHead='Furniture' 
            cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' 
          />
          <Card 
            cardImg={<img className='w-full h-48 object-cover rounded-t-lg' src="images/create.png" alt="Create" />} 
            cardHead='Create' 
            cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' 
          />
          <Card 
            cardImg={<img className='w-full h-48 object-cover rounded-t-lg' src="images/fist.png" alt="Portfolio" />} 
            cardHead='Portfolio' 
            cardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' 
          />
        </div>
      </div>
    </div>
  
  );
}

export default Works;
