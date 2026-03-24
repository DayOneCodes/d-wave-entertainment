// import { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { setAuthTokenGetter } from "../api/httpClient.js";

// export default function AuthHttpBridge () {
//   const { getAccessTokenSilently, isAuthenticated } = useAuth0();

//   useEffect(() => {
//     setAuthTokenGetter(async () => {
//       if (!isAuthenticated) return null;
//       return getAccessTokenSilently()
//     })
//   }, [getAccessTokenSilently, isAuthenticated]);
// }