import express from "express";
import allEntries from "./data/entries.js";
import allGames from "./data/games.js";

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
        formattedEpisodes.push({ ...ep, games, show: allEntries[show].title });
      });
    }
    result = result.concat(formattedEpisodes);
  });
  return result;
};

const getOneSeries = (show) => {
  let formattedEpisodes = [];
  if (show === "snescapades") {
    allEntries[show].episodes.forEach((ep) => {
      const games = ep.games.map((g) => ({
        title: allGames[g].title,
        index: g,
      }));
      formattedEpisodes.push({ ...ep, games, show: allEntries[show].title });
    });
  }
  return {
    show: allEntries[show].title,
    description: allEntries[show].description,
    episodes: formattedEpisodes,
  };
};

const getSeriesIndex = () => {
  const masterShowList = Object.keys(allEntries);
  let result = [];
  masterShowList.forEach((show) => {
    result.push({
      slug: show,
      title: allEntries[show].title,
      description: allEntries[show].description,
    });
  });
  return result;
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

router.get("/series", (req, res) => {
  const seriesIndex = getSeriesIndex();
  res.status(200).json(seriesIndex);
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
