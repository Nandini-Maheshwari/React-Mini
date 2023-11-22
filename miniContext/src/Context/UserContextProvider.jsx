import React, { useState } from "react";
import UserContext from "./UserContext";

//children = props = components wrapped by the provider 
//= placeholder where components will be rendered
const UserContextProvider = ({children}) => {

  const [user, setUser] = useState(null); 
  // iska context will be able to all components wrapped within UserContextProvider
  // i.e., to all children

  return (

    //Provider -> UserContext ki property
    <UserContext.Provider value={{user, setUser}}>
      {children} 
    </UserContext.Provider>
    // inko mil rha hai context
  )
}

export default UserContextProvider
