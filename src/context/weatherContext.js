import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weatherPopup, setWeatherPopup] = useState();
    const value = {weatherPopup, setWeatherPopup};

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}