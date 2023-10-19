import path from "path";
import express from "express";
import dotenv from "dotenv";

import staticRoutes from "./staticServer/routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use("/api/entries", staticRoutes);

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/markdown", express.static(path.join(__dirname, "/markdown")));

app.listen(PORT, () => {
  console.log(`[server]: Server is running on port ${PORT}`);
});
