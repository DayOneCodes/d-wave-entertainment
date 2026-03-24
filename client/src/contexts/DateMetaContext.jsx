import { createContext, useMemo } from "react";

const DateMetaContext = createContext();

const DateMetaProvider = ({children}) => {
  const today = new Date();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();
//monthName 
  const daysInMonth = null;
  
  useMemo(() => {
    daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  }, [today])

  return(
    <DateMetaContext.Provider value={{today, daysInMonth, year, monthIndex}}>
      {children}
    </DateMetaContext.Provider>
  )
}