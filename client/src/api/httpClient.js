import { ENV } from "../config/env.js";
import { ApiError } from "../errors/ApiError.js";

let refreshPromise = null;

export async function httpRequest(path, options = {}) {

    const res = await fetch(`${ENV.API_BASE_URL}${path}`, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

   
    if (res.status === 401 && !options._retry) {
      const refreshed = await tryRefresh();

      if (!refreshed) {
        throw new ApiError(401, "Session expired");
      }

      return httpRequest(path, {...options, _retry: true});
    }

 
    if (!res.ok) {
      const errorBody = await res.text();
      throw new ApiError(res.status, errorBody)
    }

    return res.status === 204 ? null : res.json();
  };

async function tryRefresh() {
    if (!refreshPromise) {
      refreshPromise = fetch(`${ENV.API_BASE_URL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
    }).finally(() => {
      refreshPromise = null;
    });
  }

  const res = await refreshPromise;
  return res.ok;
}

  export async function apiLogout() {
      await fetch(`${ENV.API_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
  }