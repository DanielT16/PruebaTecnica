import axios from 'axios';
const apiKey = '9652aa20222922be24a7451da8f221ce'; // Reemplaza con tu API key de OpenWeatherMap

export default class Methods {
    static async getWeather (city) {
        return await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`
        );
    }
    static async getForeCast (city) {
        return await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&cnt=33&units=metric`
        );
    }
}
