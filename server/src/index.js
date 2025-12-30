import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
  path: "./.env"
});

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (err) => {
      console.log(`Error occurred: ${err.message}`);
      throw new Error(err);
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  }
  catch (err) {
    console.log(`Server failed to start: ${err.message}`);
    process.exit(1);
  }
};

startServer();