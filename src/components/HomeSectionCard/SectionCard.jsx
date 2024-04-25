import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!product || !product.title) {
      console.error('Product data is missing or incomplete.');
      return;
    }
  
    try {
      console.log('Clicked:', product.title);
      if (product.title === 'Become A Volunteer') {
        console.log('Navigating to AddVolunteer...');
        navigate('/become-volunteer');
      }
      if (product.title === 'Home Remedies') {
        console.log('Natural solutions for a healthier home your home, your remedies....');
        navigate('/BecomePartner');
      }
      if (product.title === 'Emergency Response') {
        console.log('Navigating to EmergencyResponse...');
        navigate('/EmergencyResponse');
      }
    } catch (error) {
      console.error('Navigation Error:', error);
    }
  };

  if (!product || !product.imageUrl) {
    return null;
  }

  return (
    <div className='pl-4 cursor-pointer flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg overflow-hidden w-[25rem] mx-3'>
      <div className='h-[10rem] w-[10rem]' onClick={handleClick}>
        <img className='mt-4 object-cover object-top w-full h-full' src={product.imageUrl} alt='' />
      </div>

      <div className='p-4'>
        <h3 className='text-lg text-center font-bold font-lg text-gray-900' onClick={handleClick}>{product.title}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.description}</p>
      </div>
    </div>
  );
};

export default SectionCard;
