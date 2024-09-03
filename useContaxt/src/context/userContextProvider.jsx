import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(10)

    return(
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
        {children}
        </UserContext.Provider>
    )
}