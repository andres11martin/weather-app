import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Today from "./components/Today"
import DaysBar from "./components/DaysBar"
import axios from "axios"
import DarkMode from './components/DarkMode';
import Loading from "./components/Loading"

const App = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null)
  const [temperature1, setTemperature1] = useState(null)
  const [icon1, setIcon1] = useState(null)
  const [temperature2, setTemperature2] = useState(null)
  const [icon2, setIcon2] = useState(null)
  const [temperature3, setTemperature3] = useState(null)
  const [icon3, setIcon3] = useState(null)
  const [temperature4, setTemperature4] = useState(null)
  const [icon4, setIcon4] = useState(null)
  const [temperature5, setTemperature5] = useState(null)
  const [icon5, setIcon5] = useState(null)


  const getCity = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log({ lat: position.coords.latitude, lng: position.coords.longitude });
        var lat = JSON.stringify(position.coords.latitude)
        var lng = JSON.stringify(position.coords.longitude)
        setLatitude(lat)
        setLongitude(lng)
        var api = `https://open.mapquestapi.com/geocoding/v1/reverse?key=EjfKCh1hy5RbZHqpGmDxkEqzcdwynj0n&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
        fetch(api)
          .then(response => response.json())
          .then(data => setCity(data.results[0].locations[0].adminArea5))
          .catch(error => console.log(error))
      })
    }
  }

  const getCityTemp = async (latitude, longitude) => {
    try {
      if (latitude && longitude) {
        var api2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=9e5b6f22f4bc4adbf75f609fbd5ffe36`
        const data = await axios
          .get(api2)
          .then(res => {
            setTemperature(res.data.list[0].main.temp);
            setIcon(res.data.list[0].weather[0].icon);
            setTemperature1(res.data.list[1].main.temp);
            setIcon1(res.data.list[1].weather[0].icon);
            setTemperature2(res.data.list[2].main.temp);
            setIcon2(res.data.list[2].weather[0].icon);
            setTemperature3(res.data.list[3].main.temp);
            setIcon3(res.data.list[3].weather[0].icon);
            setTemperature4(res.data.list[4].main.temp);
            setIcon4(res.data.list[4].weather[0].icon);
            setTemperature5(res.data.list[5].main.temp);
            setIcon5(res.data.list[5].weather[0].icon);
          });
        setLoading(true);
      }
    } catch (e) {
      console.log(e)
    }
  }

  useMemo(() => {
    getCity();
  }, [])

  useMemo(() => {
    getCityTemp(latitude, longitude);
  }, [latitude, longitude])

  return (
    <div className="App">
      {loading ?

        <div className="weatherApp">
          <DarkMode />
          <div className="info">
            <div className="containerOne">
              <Today city={city} temperature={temperature} icon={icon} className="today" />
            </div>
            <div className="containerTwo">
              <DaysBar icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} icon5={icon5}
                temperature1={temperature1} temperature2={temperature2} temperature3={temperature3} temperature4={temperature4} temperature5={temperature5}
              />
            </div>
          </div>
        </div>

        : (
          <Loading />
        )}
    </div>
  );
}

export default App;
