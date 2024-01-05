import allEntries from "../data/entries.js";
import allGames from "../data/games.js";

const limit = 10;

const formatEpisodes = (show, episodes, type, slug) => {
  let formattedEpisodes = [];
  const filteredEpisodes = episodes.filter((ep) => ep.isPublished);
  filteredEpisodes.forEach((ep) => {
    if (ep.games && ep.games.length) {
      const games = ep.games.map((g) => ({
        title: allGames[g].title,
        index: g,
      }));
      formattedEpisodes.push({ ...ep, type, show, slug, games });
    } else {
      formattedEpisodes.push({ ...ep, type, show, slug });
    }
  });
  return formattedEpisodes;
};

const sortAndPaginate = (arr, page) => {
  const sorted = arr.sort((a, b) => b.published - a.published);
  const count = arr.length;
  const start = limit * (page - 1);
  const end = start + limit < count ? start + limit : count;
  return {
    entries: sorted.slice(start, end),
    page,
    pages: Math.ceil(count / limit),
  };
};

const getAllEntries = (page) => {
  let epList = [];
  const masterShowList = Object.keys(allEntries);
  masterShowList.forEach((show) => {
    const formattedEpisodes = formatEpisodes(
      allEntries[show].title,
      allEntries[show].episodes,
      allEntries[show].type,
      show
    );
    epList = epList.concat(formattedEpisodes);
  });
  return sortAndPaginate(epList, page);
};

const getOneSeries = (show, page) => {
  let epList = formatEpisodes(
    allEntries[show].title,
    allEntries[show].episodes,
    allEntries[show].type,
    show
  );
  const pageData = sortAndPaginate(epList, page);
  return {
    show: allEntries[show].title,
    description: allEntries[show].description,
    episodes: pageData.entries,
    page,
    pages: pageData.pages,
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
      order: allEntries[show].order,
    });
  });
  result = result.sort((a, b) => a.order - b.order);
  return result;
};

const getOneEntry = (series, episode) => {
  const returnEntry = allEntries[series].episodes[episode];
  let returnGames = [];
  if (returnEntry.games && returnEntry.games.length) {
    returnGames = returnEntry.games.map((g) => ({
      title: allGames[g].title,
      index: g,
    }));
  }
  return { ...returnEntry, games: returnGames, show: series };
};

export { getAllEntries, getOneSeries, getSeriesIndex, getOneEntry };
