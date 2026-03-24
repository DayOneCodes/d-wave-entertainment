import cors from "cors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import eventRouter from "./routes/events.route.js";
import subscribeRouter from "./routes/subscribe.route.js";
import orderRouter from "./routes/order.route.js";
import paymentRouter from "./routes/payment.route.js";
import authRoutes from "./routes/auth.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
const app = express();


app.use(cookieParser());

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      // "http://localhost:5173",
      "https://dwaveentertainment.co.uk"
    ]

    if (!origin || allowedOrigins.includes(origin)){
      callback(null, true)
    }
    else {
      callback(new Error ("Not allowed by CORS"))
    }
  },

  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}
)
);

app.use((req, res, next) => {
  if (req.headers["content-type"]?.startsWith("multipart/form-data")){
    return next();
  }
  express.json({limit: "10mb"})(req, res, next);
});

app.use("/api/events", eventRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/auth", authRoutes)

app.use(
  express.static(path.join(__dirname, "../../client/dist"))
);

app.get(/.*/, (req,res) => {
  res.sendFile(
    path.join(__dirname, "../../client/dist/index.html")
  )
});



export default app;
