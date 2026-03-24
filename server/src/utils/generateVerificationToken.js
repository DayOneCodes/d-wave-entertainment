import crypto from "crypto";


export const generateVerificationToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  return token;
};