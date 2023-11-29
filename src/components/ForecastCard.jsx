export const ForecastCard = ({
    icon,
    title,
    data
}) => {
    return (
        <div className="grid w-full bg-white bg-opacity-70 rounded-xl">
            <div className="flex flex-row gap-2 mx-4 mt-4">
                <img src={icon} alt="" className="w-[24px] md:w-[28px] lg:w-[32px]" />
                <div className="flex flex-col font-medium text-2xl">{title}</div>
            </div>
            <div className="grid grid-cols-3 mx-4 mb-4">
                {data.map(item => (
                    <div className="col-span-3 sm:col-span-1 grid grid-cols-10 gap-2">
                        <div className="col-auto">
                            <img src={item?.icon} alt="" className="w-[48px] h-[48px]" />
                        </div>
                        <div className="col-span-8">
                            <div className="text-xl font-medium">
                                {item?.weekday}
                            </div>
                            <div className="grid grid-cols-8">
                                <div className="col-span-6 text-sm">{item?.weather}</div>
                                <div className="col-span-1 text-xs text-gray-700">L:{item?.min||0}°</div>
                                <div className="col-span-1 text-xs text-gray-700">M:{item?.max||0}°</div>
                            </div>
                        </div >
                    </div>
                ))}
            </div>
        </div>
    )
}
