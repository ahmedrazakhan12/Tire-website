import React, { createContext, useState } from 'react';

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
 const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ user }}>
      {children}
    </GlobalContext.Provider>
  );
};
