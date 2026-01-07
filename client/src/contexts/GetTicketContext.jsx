import { createContext, useContext, useState } from "react";

const GetTicketContext = createContext();

export const onGetTicket = useContext(GetTicketContext);

export const GetTicketProvider = ({ children }) => {
  const [getTicket, setGetTicket] = useState(null);

  return (
    <GetTicketContext.Provider value={{getTicket, setGetTicket}}>
      {children}
    </GetTicketContext.Provider>
  )
}