import { httpRequest } from "./httpClient";

const BASE_AUTH_URL = "/auth";

export const AuthAPI = {
  register(payload) {
    return httpRequest(`${BASE_AUTH_URL}/register`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  login(payload) {
    return httpRequest(`${BASE_AUTH_URL}/login`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  refresh() {
    return httpRequest(`${BASE_AUTH_URL}/refresh`, {
      method: "POST",
    });
  },

  logout() {
    return httpRequest(`${BASE_AUTH_URL}/logout`, {
      method: "POST",
    });
  },

  user () {
    return httpRequest( `${BASE_AUTH_URL}/me`, {
      method: "GET",
    })
  }
}