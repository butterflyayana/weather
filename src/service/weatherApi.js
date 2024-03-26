import axios from "axios";

class WeatherApi {
    url = "https://api.openweathermap.org/data/2.5/weather?q="
    getCurrentWeather(cityName = "Bishkek"){
        const apiKey = import.meta.env.VITE_API_KEY
        return axios(`${this.url}${cityName}&appid=${apiKey}`)
        .then(({data}) => data)
    }
}

export default new WeatherApi()