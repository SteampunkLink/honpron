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
        const games = ep.games.map((g) => ({
          title: allGames[g].title,
          index: g,
        }));
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

const getOneEntry = (series, episode) => {
  const returnEntry = allEntries[series].episodes[episode];
  const returnGames = returnEntry.games.map((g) => ({
    title: allGames[g].title,
    index: g,
  }));
  return { ...returnEntry, games: returnGames, show: series };
};

router.get("/", (req, res) => {
  const epList = getAllEntries();
  res.status(200).json(epList);
});

router.get("/series/:show", (req, res) => {
  const show = getOneSeries(req.params.show);
  res.status(200).json(show);
});

router.get("/episode/:show/:epNum", (req, res) => {
  const episode = getOneEntry(req.params.show, req.params.epNum);
  res.status(200).json(episode);
});

export default router;
