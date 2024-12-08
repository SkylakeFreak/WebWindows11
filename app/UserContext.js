// @/app/userContext.js

import { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create the provider
export const UserProvider = ({ children }) => {
  const [register, setRegister] = useState(true);
  const [condition,setcondition]=useState(true);

  return (
    <UserContext.Provider value={{ register, setRegister,condition,setcondition }}>
      {children}
    </UserContext.Provider>
  );
};
