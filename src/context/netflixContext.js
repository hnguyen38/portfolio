import { createContext, useState } from "react";

export const NetflixContext = createContext();

export const NetflixProvider =({children}) => {
    const [netflixPopup, setNetflixPopup] = useState();
    const value = {netflixPopup, setNetflixPopup};

    return <NetflixContext.Provider value={value}>{children}</NetflixContext.Provider>;
}

