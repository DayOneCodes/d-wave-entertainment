import cors from "cors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import eventRouter from "./routes/events.route.js";
import siteDataRouter from "./routes/site-data.route.js";
import subscribeRouter from "./routes/subscribe.route.js";
import orderRouter from "./routes/order.route.js";
import paymentRouter from "./routes/payment.route.js";
import authRouter from "./routes/auth.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
const app = express();


app.use(cookieParser());

app.use(cors({
  origin: function (origin, callback) {
    
    const allowedOrigins = [
    "http://localhost:5000",
    "http://localhost:5173",
    "http://localhost:5000",
    "http://localhost:5174",
     "https://d-wave-entertainment.onrender.com",
     "https://dwaveentertainment.co.uk"
    ];

    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)){
      callback(null, origin);
    } else {
      callback(new Error ("Not allowed by CORS"))
    }
  },
  credentials: true,
})
);

app.use(express.json());

app.use("/api/events", eventRouter);
app.use("/api/site-data", siteDataRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/auth", authRouter);

app.use(
  express.static(path.join(__dirname, "../../client/dist"))
);

app.get(/.*/, (req,res) => {
  res.sendFile(
    path.join(__dirname, "../../client/dist/index.html")
  )
});



export default app;
