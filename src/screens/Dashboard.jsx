import { useEffect, useState } from 'react'
import { CurrentWeather } from "../components/CurrentWeather";
import { WeatherCard } from "../components/WeatherCard";
import { ForecastCard } from "../components/ForecastCard";
import { Locations } from "../components/Locations";
import ShapeCalendarToday from "../assets/icons/ShapeCalendarToday.svg";
import BrokenClouds from '../assets/images/broken_clouds.png'
import Methods from '../axios/axios'

export const Dashboard = () => {
    const [weather, setWeather] = useState([])
    const [currentWeather, setCurrentWeather] = useState([])
    const [forecast, setForecast] = useState([])
    useEffect(() => {
        getWeather()
    }, [])

    const getWeather = async () => {
        const responseWheater = await Promise.all([
            Methods.getWeather('Monterrey'),
            Methods.getWeather('Mexico'),
            Methods.getWeather('Colima'),
            Methods.getWeather('Veracruz'),
            Methods.getWeather('Durango'),
            
        ])
        const responseForecast = await Methods.getForeCast('Mexico')
        setCurrentWeather(responseWheater[0].data)
        setWeather(responseWheater.map(item => item.data))
        setForecast(responseForecast.data.list)
    }

    const changeWeatherData = async (city) => {
        const responseForecast = await Methods.getForeCast(city)
        setCurrentWeather(weather.find(item => item.name === city))
        setForecast(responseForecast.data.list)
    }

    const formatDate = (stringDate) => {
        const date = new Date(stringDate);
        const options = { weekday: 'long'};
        return date.toLocaleDateString('en', options);
    }; 

    const FirstLetterUpperCase = (str) => {
        if (!str) return ''
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="h-fit sm:h-full bg-white">
            <div className='grid grid-cols-8 bg-auto bg-center h-full bg-cover w-full h-full m-0' style={{ backgroundImage: `url(${BrokenClouds})` }}>
                <div className='col-span-8 sm:col-span-6 grid grid-cols-3 p-4 backdrop-blur-lg '>
                        <div className='col-span-3'>
                            <CurrentWeather
                                className="col-span-3"
                                icon={ShapeCalendarToday}
                                title={FirstLetterUpperCase(currentWeather?.weather?.[0]?.description)}
                                city={currentWeather?.name}
                                currentTemp={currentWeather?.main?.temp.toFixed(0)}
                                min={currentWeather?.main?.temp_min.toFixed(0)}
                                max={currentWeather?.main?.temp_max.toFixed(0)}
                                feelsLike={currentWeather?.main?.feels_like.toFixed(0)}
                            />
                        </div>
                        <div className='flex flex-row flex-wrap col-span-3 gap-5'>
                            <WeatherCard
                                icon={ShapeCalendarToday}
                                title='Wind'
                                data={[
                                    {name: 'Speed', value: `${currentWeather?.wind?.speed} km/h` },
                                    {name: 'Gust', value: `${currentWeather?.wind?.deg} km/h`},
                                    { name: 'Direction', value: `${currentWeather?.wind?.gust}°`}
                                ]}
                            />
                            <WeatherCard
                                icon={ShapeCalendarToday}
                                title='Humidity'
                                data={[
                                    { name: '', value: `${currentWeather?.main?.humidity}%` }
                                ]}
                            />
                            <WeatherCard
                                icon={ShapeCalendarToday}
                                title='Cloudiness'
                                data={[
                                    { name: '', value: `${currentWeather?.clouds?.all} mm` }
                                ]}
                            />
                            <WeatherCard
                                icon={ShapeCalendarToday}
                                title='Visibility'
                                data={[
                                    { name: '', value: `${(+currentWeather?.visibility)/1000} km` }
                                ]}
                            />
                            <WeatherCard
                                icon={ShapeCalendarToday}
                                title='Pressure'
                                data={[
                                    { name: '', value: `${(currentWeather?.main?.pressure || 0)} hPa` }
                                ]}
                            />
                            <ForecastCard
                                icon={ShapeCalendarToday}
                                title='5-day forecast'
                                data={[
                                    { icon: ShapeCalendarToday, weekday: formatDate(forecast?.[0]?.dt_txt), weather: FirstLetterUpperCase(forecast?.[0]?.weather[0]?.description), min: forecast?.[0]?.main?.temp_min.toFixed(0), max: forecast?.[0]?.main?.temp_max.toFixed(0) },
                                    { icon: ShapeCalendarToday, weekday: formatDate(forecast?.[8]?.dt_txt), weather: FirstLetterUpperCase(forecast?.[8]?.weather[0]?.description), min: forecast?.[8]?.main?.temp_min.toFixed(0), max: forecast?.[8]?.main?.temp_max.toFixed(0) },
                                    { icon: ShapeCalendarToday, weekday: formatDate(forecast?.[16]?.dt_txt), weather: FirstLetterUpperCase(forecast?.[16]?.weather[0]?.description), min: forecast?.[16]?.main?.temp_min.toFixed(0), max: forecast?.[16]?.main?.temp_max.toFixed(0) },
                                    { icon: ShapeCalendarToday, weekday: formatDate(forecast?.[24]?.dt_txt), weather: FirstLetterUpperCase(forecast?.[24]?.weather[0]?.description), min: forecast?.[24]?.main?.temp_min.toFixed(0), max: forecast?.[24]?.main?.temp_max.toFixed(0) },
                                    { icon: ShapeCalendarToday, weekday: formatDate(forecast?.[32]?.dt_txt), weather: FirstLetterUpperCase(forecast?.[32]?.weather[0]?.description), min: forecast?.[32]?.main?.temp_min.toFixed(0), max: forecast?.[32]?.main?.temp_max.toFixed(0) }
                                ]}
                            />
                        </div>
                    </div>
                <div className="col-span-8 sm:col-span-2 overflow-x-scroll whitespace-nowrap sm:whitespace-normal scroll w-full bg-gray-100 bg-opacity-50 p-4 sm:pt-10 backdrop-blur-lg">
                        <div className="sticky left-0 text-4xl font-bold px-4">Locations</div>
                        {weather.map(city => (
                            <Locations
                                key={city?.name} 
                                city={city?.name}
                                weather={city?.weather[0]?.main}
                                icon={ShapeCalendarToday}
                                currentTemp={city?.main.temp.toFixed(0)}
                                min={city?.main.temp_min.toFixed(0)}
                                max={city?.main.temp_max.toFixed(0)}
                                onClick={() => changeWeatherData(city.name)}
                            />
                        ))}
                    </div>
        </div>
    </div>
    );
};
