import express from "express";
import allRanks from "../data/ranks.js";

const router = express.Router();

const getRanks = (rank) => {
  if (rank) {
    return allRanks[rank];
  } else {
    return allRanks;
  }
};

router.get("/", (req, res) => {
  res.json(getRanks(req.params.rank));
});

export default router;
