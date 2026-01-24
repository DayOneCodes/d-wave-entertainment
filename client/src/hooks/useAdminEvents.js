import {useCallback, useState} from "react";
import { eventService } from "../services/event.service.js";

export function useAdminEvents() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addEvent = useCallback(async (payload) => {
    setLoading(true);

    try {
      return await eventService.addEvent(payload);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateEvent = useCallback(async (id, payload) => {
    setLoading(true);

    try {
      return await eventService.updateEvent(id, payload);
    }
    finally{
      setLoading(false);
    }
  }, []);

  const deleteEvent = useCallback(async (id) => {
    setLoading(true);

    try {
      await eventService.deleteEvent(id);
    } finally {
      setLoading(false);
    }
  }, []);

  return {addEvent, updateEvent, deleteEvent, loading, error};
}

