import cls from './Weather.module.css'
import cloud from "../../assets/cloud.svg"
import { days } from '../../constants'


const WeatherStatus = ({ temp, wStatus }) => {
    
    const monthArr = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDay()
    const dates = date.getDate()
    const month = date.getMonth()
  return (
    <div className={cls.flex}>
        <div className={cls.wStatus}>
            <h1>{wStatus}</h1>
          <div className={cls.wImg}>
            <img src={cloud} alt="" />
          </div>
            <h1 className={cls.text}>{temp}°C</h1>
            <p>{days[day - 1]} | {dates} {monthArr[month]} {year}</p>
        </div>
        <div className={cls.cloudy}>
            <img src={cloud} alt="" />
        </div>
    </div>
  )
}

export default WeatherStatus