import { ENV } from "../config/env.js";
import { ApiError } from "../errors/ApiError.js";

export async function httpRequest(path, options = {}) {

    const res = await fetch(`${ENV.API_BASE_URL}${path}`, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
 
    if (!res.ok) {
      const errorBody = await res.text();
      throw new ApiError(res.status, errorBody)
    }

    // return res.status === 204 ? null : res.json();
    return res.json();
  };