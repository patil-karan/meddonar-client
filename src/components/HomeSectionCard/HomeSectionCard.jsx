import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="alice-carousel__stage-item __active __target" style={{ width: '415px', marginLeft: '28px' }}>
    <div onClick={() => navigate('/medicines')} className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[20rem] ml-5">
      <div className="h-[13rem] w-[17rem]">
        <img className="mt-3 object-cover object-top w-full h-full" src={product.imageUrl} alt="" />
      </div>
      <div className="p-4">
        <h2 className="mt-2 text-lg text-center font-bold text-black">{product.title}</h2>
      </div>
    </div>
  </div>
  );
};

export default HomeSectionCard;
