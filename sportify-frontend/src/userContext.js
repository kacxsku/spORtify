import React, { createContext, useState, useEffect } from "react";
import userService from './service/userService'

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const[user, setUser] = useState()

    useEffect(() => {
      const fetchUser = () => {
        userService.getUserData("1")
        .then(user => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          console.log("get user operation successfully finish", user);
        }).catch(error => {
          console.log("unable to get user data", error)
      })
    }
    fetchUser();
  }, []);

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };
