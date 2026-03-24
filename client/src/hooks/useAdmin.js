import {useCallback, useState} from "react";
import { eventService } from "../services/event.service.js";

export function useAdmin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addEvent = useCallback(async (payload) => {
    console.log(payload)
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

  const uploadEventImage = useCallback (async (file) => {
    setLoading(true);

    try {
      const res = await eventService.uploadImage(file);
      const data = await res.json();
      console.log("Uploaded image Url:", data.imageUrl)
      return data.imageUrl;
    } finally {
      setLoading(false)
    }
  }, []);

  return {addEvent, updateEvent, deleteEvent, uploadEventImage, loading, error};
}

