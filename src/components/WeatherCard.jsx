import { useReducer } from "react";
import ShapeVisibility from "../assets/icons/ShapeVisibility.svg";

export const WeatherCard = ({
    icon,
    title,
    data
}) => {
    return (
        <div className="w-full sm:w-fit grow">
            <div className="grid w-full bg-white bg-opacity-50 rounded-xl p-4">
                <div className="flex flex-row items-center">
                    <img src={icon} alt="" className="w-[24px] md:w-[28px] lg:w-[32px]" />
                    <div className="flex flex-col font-medium text-2xl">{title}</div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {data.map(item => (
                        <div className="flex flex-col">
                            <div className="flex flex-row text-xl border-solid text-gray-600">{item.name || '‎ '}</div>
                            <div className="flex flex-row text-3xl border-solid">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
