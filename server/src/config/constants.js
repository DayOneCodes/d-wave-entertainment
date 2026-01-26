export const DB_NAME = "d_wave_entertainment";

export const TOKEN_ISSUER = DB_NAME + "-api";

export const ROLE_PERMISSIONS = {
  user: ["read:profile"],
  admin: ["read:profile", "manage:users", "manage:events"]
};

export const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
}
