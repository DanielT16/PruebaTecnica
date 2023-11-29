export const Locations = ({
    icon,
    weather,
    city,
    currentTemp,
    min,
    max,
    onClick
}) => {
    return (
        <div className="inline-block p-2 rounded-cxl bg-auto bg-center w-5/6 sm:w-full cursor-pointer" onClick={onClick}>
            <div className="grid grid-cols-12 bg-white bg-opacity-50 rounded-xl gap-4 p-2">
                <div className="grid grid-cols col-span-5">
                    <div className="text-2xl font-medium">{city}</div>
                    <div className="col-auto text-xl">{weather}</div>
                </div>
                <div className="flex col-span-2 items-center justify-center">
                    <img src={icon} alt="" className="w-full" />
                </div>
                <div className="flex col-span-3 text-4xl items-center justify-center font-bold">{currentTemp}°</div>
                <div className="flex flex-col col-span-1 items-center justify-center">
                    <div className="text-xs text-gray-700">L:{min}°</div>
                    <div className="text-xs text-gray-700">H:{max}°</div>
                </div>
            </div>
        </div>
    )
}

