import React from 'react';
import { useNavigate } from 'react-router-dom';


const OrderSummery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>order confirmed</div>
      <button onClick={()=>navigate(-1)} >Go Back</button>
     
    </>
  );
};

export default OrderSummery;

