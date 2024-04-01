import  cls from './weatherCountry.module.css'
import textLike from '../../assets/textLike.svg'
import les from '../../assets/les.svg'
import autumn from '../../assets/autumn.svg'
import summer from '../../assets/summer.svg'
import palm from '../../assets/palm.svg'
import WeatherWeek from '../Weather-info/weatherWeek/WeatherWeek'

const WeatherCountry = () => {
  return (
    <div>
        <div className={cls.country__wrap}> 
        <div className={cls.textLikes}>
          <img className={cls.Like} src={textLike} alt="" />
          <h2 className={cls.text}>Activities in your area</h2>
        </div>
        <div className={cls.pic}>
          <img className={cls.nature} src={les} alt="" />
          <img className={cls.nature} src={autumn} alt="" />
          <img className={cls.nature} src={summer} alt="" />
          <img className={cls.nature} src={palm} alt="" />
        </div>
        <div className={cls.aw}>
           <h3 className={cls.away}>2km away</h3>
           <h3 className={cls.away}>1.5km away</h3>
           <h3 className={cls.away}>3km away</h3>
           <h3 className={cls.away}>500m away</h3>
        </div>
        </div>
        <div className={cls.country__wrapMiddle}>
          <WeatherWeek/>
         </div>
        <div className={cls.country__wrap}></div>
    </div>
  )
}

export default WeatherCountry