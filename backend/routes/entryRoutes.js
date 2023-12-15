import express from "express";
import {
  getAllEntries,
  getOneSeries,
  getSeriesIndex,
  getOneEntry,
} from "../controllers/entryCtrl.js";

const router = express.Router();

router.get("/", (req, res) => {
  const page = req.query.pageNum || 1;
  const epList = getAllEntries(page);
  res.status(200).json(epList);
});

router.get("/series", (req, res) => {
  const seriesIndex = getSeriesIndex();
  res.status(200).json(seriesIndex);
});

router.get("/series/:show", (req, res) => {
  const page = req.query.pageNum || 1;
  const epList = getOneSeries(req.params.show, page);
  res.status(200).json(epList);
});

router.get("/episode/:show/:epNum", (req, res) => {
  const episode = getOneEntry(req.params.show, req.params.epNum);
  res.status(200).json(episode);
});

export default router;
