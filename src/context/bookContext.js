import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [bookPopup, setBookPopup] = useState();
    const value = {bookPopup, setBookPopup};

    return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}