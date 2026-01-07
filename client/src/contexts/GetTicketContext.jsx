import { createContext, useContext, useState, useReducer } from "react";

const SET_TICKET = "SET_TICKET";

function getTicketReducer (state, action){
  switch (action.type){
    case SET_TICKET:
      return {...state, event: action.payload};
    default:
      return state;
  }
}

const GetTicketContext = createContext();

export const useGetTicket = () => useContext(GetTicketContext);

export const GetTicketProvider = ({ children }) => {
  const initialState = {
    event: null,
  }

  const [state, dispatch] = useReducer(getTicketReducer, initialState);

  const setGetTicket = (event) => {
    dispatch({type: SET_TICKET, payload: event})
  };


  return (
    <GetTicketContext.Provider value={{event: state.event, setGetTicket}}>
      {children}
    </GetTicketContext.Provider>
  )
}