import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import eventRouter from "./routes/events.route.js";
import siteDataRouter from "./routes/site-data.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
     "https://d-wave-entertainment.onrender.com"
    ]
}));

app.use(express.json());

app.use("/api/events", eventRouter);
app.use("/api/site-data", siteDataRouter);

app.use(
  express.static(path.join(__dirname, "../../client/dist"))
);

app.get(/.*/, (req,res) => {
  res.sendFile(
    path.join(__dirname, "../../client/dist/index.html")
  )
});



export default app;