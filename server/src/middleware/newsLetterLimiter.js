import rateLimit from "express-rate-limit";

export const newsletterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many subscription attempts. Try again later"
  }
})