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
  origin: "https://dwaveentertainment.co.uk",
  credentials: true
}
)
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
