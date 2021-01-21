import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Weather({city}){

    const [weather, setWeather] = useState({})
  
  useEffect( ()=> {
    axios.get(
    'http://api.weatherstack.com/current',
      {
        params: {
          access_key : process.env.REACT_APP_API_KEY,
          query : city
        }
      })
      .then(response=>{
        console.log("weather query", response.data.current)
       setWeather(response.data.current)
    })
      .catch(error => {
        console.log(error)
      })
      console.log(weather)
    },[city]
    )
  
      return(
        <div>
            <h3>Weather in {city}</h3>
            <span>temperature: {weather.temperature} ºC</span>
            <br/>
            <img src={weather.weather_icons} alt={weather.weather_descriptions}/>
            <br/>
            <span>wind: {weather.wind_speed} mph direction {weather.wind_speed} </span>
        </div>
      )
  
  }
  