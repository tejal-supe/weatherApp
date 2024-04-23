import axios from "axios"
import apiConfig from "../config/apiConfig.json"

export const getWeatherDataByCity = async (cityName: string) => {
    const conURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=7dfdf613ca44757e704911a0f6a5fd71`;
    const URL = `${apiConfig.weatherByCity}?q=${cityName}&appid=7dfdf613ca44757e704911a0f6a5fd71`;
    const data = await axios.get(conURL);
    console.log(data.data, import.meta.env.VITE_APP_OPEN_API_KEY);
    return data.data
    
}

export const getLatLon = async(cityName:string) => {
     const conURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&cnt=7&units=metric&appid=7dfdf613ca44757e704911a0f6a5fd71`;
     const URL = `${apiConfig.weatherByCity}?q=${cityName}&appid=7dfdf613ca44757e704911a0f6a5fd71`;
     const data = await axios.get(conURL);
     console.log(data.data, import.meta.env.VITE_APP_OPEN_API_KEY);
     return data.data;
}