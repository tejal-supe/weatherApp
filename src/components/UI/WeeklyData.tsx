import React, { useState } from 'react'
import WeekCard from './WeekCard';
import { useSelector } from 'react-redux';

const WeeklyData = () => {
  const [isCelcius, setIsCelcius] = useState<boolean>(false)
  const cityHandler = useSelector((s: any) => s.city);
  
    return (
      <section className="weekly-section">
        <div className="d-flex justify-content-between">
          <div className="tabs">
            <span>Today</span>
            <span className="week">Week</span>
          </div>
          <div className="conversion d-flex justify-content-between">
            <div className={`${isCelcius ? "selected" : "unselected"} mx-2`}>
              <sup>&deg;</sup>C
            </div>
            <div className={`${!isCelcius ? "selected" : "unselected"} mx-2`}>
              <sup>&deg;</sup>F
            </div>
            <div className="profile-pic">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                alt="profile image"
                height="40px"
                width="40px"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
        </div>
      </section>
    );
}

export default WeeklyData