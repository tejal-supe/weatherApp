import React, { useEffect, useState } from 'react'
import { TiWeatherPartlySunny, TiWeatherCloudy } from "react-icons/ti";
import { LuCloudRain } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setLocation, setWeatherData } from '../../redux/citySlice';
import { getCityImageService } from '../../service/cityService';


const Temperature = () => {
  const cityHandler = useSelector((s: any) => s.city)
  const dispatch = useDispatch()
  const [imageUrl, setImageUrl] = useState<string>("");

  console.log(cityHandler,'handler');
  const getWeatherData = async() => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityHandler.position.lat}&lon=${cityHandler.position.lon}&units=metric&appid=7dfdf613ca44757e704911a0f6a5fd71`
      );
      // const f = axios.get(
      //   "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
      // );
      // console.log(f);
      
      dispatch(setWeatherData(data.data))
      dispatch(setLocation(data.data.name))
    } catch (error) {
      
    }
  }
    const getCityImage = async () => {
      const data = await getCityImageService(cityHandler.cityName);
      setImageUrl(data.results[0]?.urls.full);
    };

  useEffect(() => {
    getCityImage(); 
    getWeatherData()
  }, [cityHandler.position,cityHandler.cityName]
  );
    
  return (
    <div className="temperature-div">
      <div className="weather-today-icon">
        <TiWeatherPartlySunny
          style={{
            color: "#789315",
          }}
          size="260px"
        />
      </div>
      <div className="temperature">
        <p className="temp-cel">
          12<sup>&deg;c</sup>
        </p>
        <p className="day">
          Monday, <span className="time">16:00</span>
        </p>
        <hr />
        <p className="weather-line1">
          <TiWeatherCloudy
            style={{
              color: "#D5D5D5",
            }}
          />{" "}
          Mostly Cloudy
        </p>
        <p className="weather-line1">
          {" "}
          <LuCloudRain
            style={{
              color: "#000000",
            }}
          />{" "}
          Rain - 30%
        </p>
      </div>
      <div className="city-image">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D"}
          alt="city image"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
}

export default Temperature