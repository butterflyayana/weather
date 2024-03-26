import {useEffect, useState} from 'react'
import weatherApi from './service/weatherApi'
import Header from './components/header/Header'
import WeatherStatus from './components/weather-status/WeatherStatus'
import WeatherContent from './components/weather-content/WeatherContent'
import Sidebar from './components/sidebar/Sidebar'
import WeatherCountry from './components/Weather-counrty/WeatherCountry'
import WeatherInfo from './components/Weather-info/WeatherInfo'

const App = () => {
  const [city, setCity] = useState(null)
  useEffect(() => {
    const getWeatherData = async () => {
      const data = await weatherApi.getCurrentWeather()
      console.log(data, "---");
      setCity(data)
    }
    getWeatherData()
  }, [])
  if(city === null){
    return <h1>Loading...</h1>
  }
  return (
    <div className='container'>
      <Header cityName={city.name}/>
      <WeatherStatus wStatus={city.weather[0].main}
       temp={(city.main.temp - 273.15).toFixed()}/>
      <WeatherContent>
        <Sidebar/>
        <WeatherCountry/>
        <WeatherInfo/>
      </WeatherContent>
      
    </div>
  )
}

export default App