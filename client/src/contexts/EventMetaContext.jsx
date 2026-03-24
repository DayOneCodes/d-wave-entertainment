import { createContext, useReducer } from "react";
import { EVENT_META_ACTIONS } from "../config/env.js";

export const EventMetaContext = createContext();

//ticket categories: type, description, price, quantityAvailable

function EventMetaReducer (state, action) {
  switch (action.type) {
    case EVENT_META_ACTIONS.STEP_ONE:
      const {title, summary, category, description}  = action.payload;
      return {...state, title, summary, category, description, flowSteps: {currentStep: 1}};
    case EVENT_META_ACTIONS.STEP_TWO:
      const {day, time, month, year, location} = action.payload;
      console.log(state)
      return {...state, day, time, month, year, location, flowSteps: {currentStep: 2, previousStep: 1}};
    case EVENT_META_ACTIONS.STEP_THREE:
      const {ticketUrl, tickets} = action.payload;
      console.log(state)
      return {...state, ticketUrl, tickets, flowSteps: {currentStep: 3, previousStep: 2}};
    case EVENT_META_ACTIONS.STEP_FOUR:
      console.log(state)
      const {imageUrl} = action.payload;
      return {...state, imageUrl, flowSteps: {currentStep: 4, previousStep: 3}};
    default:
      return state;
  }
}

export const EventMetaProvider = ({children}) => {
  const initialState = {
    flowSteps: {
      currentStep: 0,
      previousStep: 0
    }}

  const [state, dispatch] = useReducer(EventMetaReducer, initialState);

 return(
  <EventMetaContext.Provider value={{event: state, dispatch}}>
    {children}
  </EventMetaContext.Provider>
 )
}