import {createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const userData = {
        name: "Shubham",
        age: "24"
    }

    return(
        <AppContext.Provider
            value={userData}
        >
        {children}
        </AppContext.Provider>
    )
}

