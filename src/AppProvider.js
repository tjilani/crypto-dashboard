import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState("dashboard");

  return (
    <AppContext.Provider value={{ page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
