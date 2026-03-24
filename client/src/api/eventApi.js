import { httpRequest } from "./httpClient";
import { ENV } from "../config/env.js"

const BASE_EVENTS_URL = "/events";

export const EventAPI = {
  fetchAll () {
    return httpRequest(BASE_EVENTS_URL);
  },

  //WRONG PATH FOR THE METHOR CREATE
  create(payload) {
    return httpRequest(`${BASE_EVENTS_URL}/create-event`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(payload),
    });
  },

  update(eventId, payload) {
    return httpRequest(`${BASE_EVENTS_URL}/update-event/${eventId}`, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(payload),
    })
  },

  delete(eventId) {
    return httpRequest(`${BASE_EVENTS_URL}/delete-event/${eventId}`, {
      method: "DELETE",
      credentials: "include",
    });
  },

  async upload(formData) {
    return await fetch(`${ENV.API_BASE_URL}${BASE_EVENTS_URL}/upload-image`, {
      method: "POST",
      credentials: "include",
      body: formData
    })
  },
};