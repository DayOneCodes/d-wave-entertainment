import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.config.js";

export function issueAccessToken(user){
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      audience: user.role === "admin" ? "d-wave-ent-admins" : "d-wave-ent-users"
    },
    jwtConfig.access.secrets[0],
    {
      algorithm: jwtConfig.access.algorithm,
      expiresIn: jwtConfig.access.expiresIn,
      issuer: jwtConfig.access.issuer,
    }
  );
}

export function issueRefreshToken(user) {
  return jwt.sign(
    {
      id: user._id,
      audience: "d-wave-ent-refresh"
    },
    jwtConfig.refresh.secrets[0],
    {
      algorithm: jwtConfig.refresh.algorithm,
      expiresIn: jwtConfig.refresh.expiresIn,
      issuer: jwtConfig.refresh.issuer,
    }
  );
}

export function verifyAccessToken (token) {
  for (const secret of jwtConfig.access.secrets) {
    try {
      return jwt.verify(token, secret, {
        algorithms: [jwtConfig.access.algorithm],
        issuer: jwtConfig.access.issuer,
        audience: ["d-wave-ent-users", "d-wave-ent-admins"]
      });
    } catch (_) {}
  }
  throw new Error("Invalid access token");
};

export function verifyRefreshToken (token) {
  for (const secret of jwtConfig.refresh.secrets) {
    try {
      return jwt.verify(token, secret, {
        algorithms: [jwtConfig.refresh.algorithm],
        issuer: jwtConfig.refresh.issuer,
        audience: "d-wave-ent-refresh"
      }); 
    }
    catch (_) {}
  }
  throw new Error("Invalid refresh token");
}