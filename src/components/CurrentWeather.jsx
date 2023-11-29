export const CurrentWeather = ({
    icon,
    title,
    city,
    currentTemp,
    min,
    max,
    feelsLike,
}) => {
    return (
        <div className="grid grid-cols-12 gap-4 m-4">
            <div className="grid grid-cols-10 sm:grid-cols-2 sm:col-span-2 col-span-12">
                <div className="col-span-2">
                    <img src={icon} alt="" className="sm:h-[162px] h-[64px]" />
                </div>
                <div className="col-span-2 flex items-center justify-center font-bold text-lg">{title}</div>
            </div>
            <div className="grid grid-cols sm:col-span-8">
                <div className="text-6xl font-bold">{city}</div>
                <div className="grid grid-cols-10">
                    <div className="col-span-4 sm:col-span-2 text-6xl font-bold">{currentTemp}°</div>
                    <div className="col-span-6 sm:col-span-2 m-2">
                        <div className="grid grid-cols-2">
                            <div className="text-xl font-medium">L:{min}°</div>
                            <div className="text-xl font-medium">H:{max}°</div>
                        </div>
                        <div>
                            <div className="text-base">Feels like: {feelsLike}°</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
