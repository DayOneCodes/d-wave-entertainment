import {TOKEN_ISSUER} from "./constants.js";

export const jwtConfig = {
  access: {
    secrets: [
      process.env.JWT_ACCESS_SECRET_CURRENT,
      process.env.JWT_ACCESS_SECRET_PREVIOUS
    ].filter(Boolean),
    algorithm: "HS256",
    expiresIn: "15m",
    issuer: TOKEN_ISSUER,
  },
  refresh: {
    secrets: [
      process.env.JWT_REFRESH_SECRET_CURRENT,
      process.env.JWT_REFRESH_SECRET_PREVIOUS
    ].filter(Boolean),
    algorithm: "HS256",
    expiresIn: "7d",
    issuer: TOKEN_ISSUER,
  }
}

if (!jwtConfig.access.secrets.length) {
  throw new Error ("TOKEN ERROR: JWT access secrets not configured");
}

if (!jwtConfig.refresh.secrets.length) {
  throw new Error ("TOKEN ERROR: JWT refresh secrets not configured");
}