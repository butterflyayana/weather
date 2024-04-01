import WeatherWeek from './weatherWeek/WeatherWeek'
import cls from './weatherInfo.module.css' 

const WeatherInfo = () => {
  return (
    <div className={cls.info}>
      <WeatherWeek/>
    </div>
  )
}

export default WeatherInfo