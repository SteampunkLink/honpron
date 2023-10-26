import path from "path";
import express from "express";
import dotenv from "dotenv";

import entryRoutes from "./staticServer/entryRoutes.js";
import rankRoutes from "./staticServer/rankRoutes.js";
import faqRoutes from "./staticServer/faqRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use("/api/entries", entryRoutes);
app.use("/api/ranks", rankRoutes);
app.use("/api/faqs", faqRoutes);

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/markdown", express.static(path.join(__dirname, "/markdown")));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server]: Server is running on port ${PORT}`);
});
