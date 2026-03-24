import { useContext, useCallback, useRef } from "react";
import { EventMetaContext } from "../contexts/EventMetaContext.jsx";
import EventMetaError from "../errors/EventMetaError.js";
import { EVENT_META_ACTIONS } from "../config/env.js";


export const useEventMeta = () => {
  const ctx = useContext(EventMetaContext);

  if (!ctx) {
    throw new EventMetaError("useEventMeta must be used within EventMetaContext", "USAGE_ERROR")
  }

  const { event, dispatch } = ctx
  const draftRef = useRef({});


  const addDescription = useCallback ((payload) => {
    const { title, summary, category, description } = payload;

    if (!title || !summary || !category || !description) {
      console.log("All fields are required", "VAL_ERROR");
      throw new EventMetaError("All fields are required", "VAL_ERROR", 400);
    }

    draftRef.current = {...draftRef.current, ...payload}

    dispatch({
      type: EVENT_META_ACTIONS.STEP_ONE, 
      payload
    });
  }, [])


  const addLogistics = useCallback ((payload) => {
    const { day, time, month, year, location } = payload;

    if (!day || !time || !month || !year || !location) {
      throw new EventMetaError("All fields are required", "VAL_ERR", 400)
    }

    draftRef.current = {...draftRef.current, ...payload}

    dispatch({
      type: EVENT_META_ACTIONS.STEP_TWO, 
      payload
    })

    //doesn't update after importing into here even if state updates in context, this holds same throughout. Same the display in modal hook.
    console.log(event)
  }, []);


  const addTickets = useCallback ((payload) => {
    const { ticketUrl, tickets } = payload;

    if (!tickets && !ticketUrl) {
      throw new EventMetaError (400, "VAL_ERR: At least one ticket category is required")
    }

    draftRef.current = {...draftRef.current, ...payload}

    dispatch({
      type: EVENT_META_ACTIONS.STEP_THREE, 
      payload
    })
  }, [])
  

  const addImage = useCallback ((payload) => {

    draftRef.current = {...draftRef.current, ...payload}

    dispatch({
      type: EVENT_META_ACTIONS.STEP_FOUR, 
      payload
    })
  }, [])


  const eventDetails = useCallback (() => {

    const payload = {
      ...draftRef.current,
      status: "ready",
      submittedAt: Date.now()
    }

    return payload;
  }, [])


  return {
    addDescription, addLogistics, addTickets, addImage, eventDetails
  }
}