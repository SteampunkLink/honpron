import express from "express";
import allEntries from "./entries.js";
import allGames from "./games.js";

const router = express.Router();

const getAllEntries = () => {
  const masterShowList = Object.keys(allEntries);
  let result = [];
  masterShowList.forEach((show) => {
    let formattedEpisodes = [];
    if (show === "snescapades") {
      allEntries[show].episodes.forEach((ep) => {
        const games = ep.games.map((g) => allGames[g].title);
        formattedEpisodes.push({ ...ep, games, show });
      });
    }
    result = result.concat(formattedEpisodes);
  });
  return result;
};

const getOneSeries = (show) => {
  return allEntries[show];
};

router.get("/", (req, res) => {
  const epList = getAllEntries();
  res.status(200).json(epList);
});

router.get("/:show", (req, res) => {
  const show = getOneSeries(req.params.show);
  res.status(200).json(show);
});

export default router;
