import React from 'react';
import { useNavigate } from 'react-router-dom';

const MissionCard = ({ product }) => {
  const navigate = useNavigate();

  if (!product || !product.imageUrl) {
    return null; 
  }

  return (
    <div onClick={() => navigate('/about')}  className='cursor-pointer flex flex-col items-center bg-gray-200 rounded-lg shadow-lg overflow-hidden w-[25rem] mx-3'>
      <div className='h-[13rem] w-[15rem]'>
        <img className='mt-4 object-cover object-top w-full h-full' src={product.imageUrl} alt='' />
      </div>

      <div className='p-4'>
      <h3 className='mt-2 text-2xl text-center font-bold font-lg text-gray-900'>{product.title}</h3>
      </div>
    </div>
  );
};

export default MissionCard;
