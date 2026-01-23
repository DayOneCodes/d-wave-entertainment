import {ENV} from "../config/env.js";
import {ApiError} from "../errors/ApiError.js";


const BASE_EVENTS_URL = `${ENV.API_BASE_URL}/events`;

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },

    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new ApiError(res.status, errorBody);
  }

  // return res.status === 204? mull : res.json();
  return res.json();
}

export const EventAPI = {
  fetchAll () {
    return request(BASE_EVENTS_URL);
  },

  create(payload) {
    return request(BASE_EVENTS_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  update(eventId, payload) {
    return request(`${BASE_EVENTS_URL}/${eventId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    })
  },

  delete(eventId) {
    return request(`${BASE_EVENTS_URL}/${eventId}`, {
      method: "DELETE",
    });
  },
};