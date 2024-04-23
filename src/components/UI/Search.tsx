import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { MdGpsNotFixed } from "react-icons/md";
import { getLatLon, getWeatherDataByCity } from "../../service/getWeather";
import { setCoordinates, setLocation, setTemperatureData } from "../../redux/citySlice";

const Search = () => {
  const city = useSelector((s:any)=>s.city)
  const [cityName, setCityName] = useState<string>(city.cityName);
  const dispatch = useDispatch();

  const getTempData = async () => {
    try {
      const data = await getLatLon(cityName);
      const dataw = await getWeatherDataByCity(cityName);
      console.log(cityName,'cityName');
      
      const { coord } = data;
      console.log(dataw,'datax');
      
      console.log(data);
      
      dispatch(setCoordinates(coord),setTemperatureData(data));

    } catch (error) {
      console.log(error, "error");
    }
  };
      console.log(cityName, "cityName",city.cityName);

      
  useEffect(() => {
    if (cityName.length > 0) {
      const debouncing = setTimeout(() => {
        getTempData();
        dispatch(setLocation(cityName));
      }, 1000);

      return () => clearTimeout(debouncing);
    }
  }, [cityName]);

  return (
    <div className="search-div">
      <div className="search-icon">
        <CiSearch
          style={{
            color: "#000000",
            fontWeight: "900",
          }}
          size="20px"
          className="mb-1"
        />
        <input
          type="text"
          placeholder="Search for places ..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div className="locate-icon">
        <MdGpsNotFixed
          style={{
            color: "#000000",
          }}
        />
      </div>
    </div>
  );
};

export default Search;
