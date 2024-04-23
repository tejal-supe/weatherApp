import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityName: "",
    position: {
        lat: 0,
        lon:0
    },
    weatherData: {},
    temperatureData:{}
};

const city = createSlice({
    initialState,
    name: "city",
    reducers: {
        setLocation: (state, action) => {
            state.cityName = action.payload
        },
        setCoordinates: (state, action)=>{
            state.position = action.payload
        },
        setWeatherData: (state, action) => {
            state.weatherData = action.payload
        },
        setTemperatureData: (state, action) => {
            state.temperatureData = action.payload;
        }
    }
})
export const { setLocation, setCoordinates , setWeatherData , setTemperatureData } = city.actions;
export default city.reducer;