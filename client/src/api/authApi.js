import { httpRequest } from "./httpClient.js";

const BASE_AUTH_URL = "/auth"

export const AuthAPI = {
  login (payload) {
    return httpRequest(`${BASE_AUTH_URL}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(payload),
    });
  },

  logout () {
    return httpRequest(`${BASE_AUTH_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });
  },

  signup (payload) {
    return httpRequest(`${BASE_AUTH_URL}/signup`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(payload)
    })
  },

  me () {
    return httpRequest(`${BASE_AUTH_URL}/check-auth`, {
      method: "GET",
      credentials: "include"
    });
  },

  verifyEmail (payload) {
    return httpRequest(`${BASE_AUTH_URL}/verify-email`, {
      method: "POST",
      body: JSON.stringify(payload)
    })
  }
}