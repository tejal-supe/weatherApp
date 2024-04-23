import axios from "axios";
import apiConfig from "../config/apiConfig.json";

const CLIENT_ID: string = import.meta.env.VITE_APP_UNSPLASH_API_KEY;

export const getCityImageService = async (cityName: string) => {
  const URL = apiConfig.cityImage;
  const data = await axios.get(
    `${URL}?page=1&per_page=1&query=${cityName}&client_id=${CLIENT_ID}`
  );
  return data.data;
};
