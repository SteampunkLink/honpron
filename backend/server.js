import path from "path";
import express from "express";
import dotenv from "dotenv";

import entryRoutes from "./routes/entryRoutes.js";
import rankRoutes from "./routes/rankRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import friendRoutes from "./routes/friendRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/entries", entryRoutes);
app.use("/api/ranks", rankRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/cards", cardRoutes);
app.use("/api/friends", friendRoutes);

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/markdown", express.static(path.join(__dirname, "/markdown")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running");
  });
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server]: Server is running on port ${PORT}`);
});
