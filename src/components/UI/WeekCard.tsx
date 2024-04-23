import React from 'react'
import { FaCircle } from "react-icons/fa";

const WeekCard = () => {
  return (
    <div className="week-card">
      <p className='daytitle'>Sun</p>
      <FaCircle
        style={{
          color: '#f5f910',
        }}
        size="20px"
          />
          <p className='day-temp'>15 <sup>&deg;</sup><span> -3<sup>&deg;</sup></span></p>
    </div>
  );
}

export default WeekCard