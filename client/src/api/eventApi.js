import { httpRequest } from "./httpClient";

const BASE_EVENTS_URL = "/events";

export const EventAPI = {
  fetchAll () {
    return httpRequest(BASE_EVENTS_URL);
  },

  //WRONG PATH FOR THE METHOR CREATE
  create(payload) {
    return httpRequest(BASE_EVENTS_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  update(eventId, payload) {
    return httpRequest(`${BASE_EVENTS_URL}/${eventId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    })
  },

  delete(eventId) {
    return httpRequest(`${BASE_EVENTS_URL}/${eventId}`, {
      method: "DELETE",
    });
  },
};