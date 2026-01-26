export const DB_NAME = "d_wave_entertainment";

export const TOKEN_ISSUER = DB_NAME + "-api";

export const ROLE_PERMISSIONS = {
  user: ["read:profile"],
  admin: ["read:profile", "manage:users", "manage:events"]
};
