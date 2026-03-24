import { ENV } from "../config/env.js";
import { ApiError } from "../errors/ApiError.js";

// let getAuthToken = null;

// export function setAuthTokenGetter (fn) {
//   getAuthToken = fn;
// }

export async function httpRequest(path, options = {}) {

   const headers = {
    "Content-Type": "application/json",
    ...options.headers,
   };

  //  if (getAuthToken) {
  //   const token = await getAuthToken();
  //   if (token) {
  //     headers.Authorization = `Bearer ${token}`;
  //   }
  //  }

    const res = await fetch(`${ENV.API_BASE_URL}${path}`, {
      ...options,
      headers,
    });

 
    if (!res.ok) {
      const errorBody = await res.text();
      throw new ApiError(res.status, errorBody)
    }

    return res.status === 204 ? null : res.json();
  };

