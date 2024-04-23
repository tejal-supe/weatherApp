import { useEffect } from 'react';
import './App.css'
import Highlights from './components/UI/Highlights';
import Search from './components/UI/Search';
import Temperature from './components/UI/Temperature';
import WeeklyData from './components/UI/WeeklyData';
import { useDispatch } from 'react-redux';
import { setCoordinates } from './redux/citySlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sucess,error)
    } else {
      alert("Not supported")
    }

    function sucess(position:any) {
        const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(setCoordinates({lat:latitude,lon:longitude}))

    }
    function error() {
      console.log('error');
      
    }
  }, [])
 
  return (
    <div className="container bg-white main-container">
      <div className="row g-0">
        <div className="col-3 p-4">
          <Search />
          <Temperature />
        </div>
        <div className="col-9 right-section">
          <WeeklyData />
          <Highlights />
        </div>
      </div>
    </div>
  );
}

export default App
