import allCards from "../data/cards.js";

const getCardIds = () => {
  const gamesArr = [];
  const screensArr = [];
  for (let i = 0; i < allCards.length; i++) {
    gamesArr.push(allCards[i].game);
    let singleGameScreenArr = [];
    for (let j = 0; j < allCards[i].cards.length; j++) {
      const screenOjb = {
        value: allCards[i].cards[j].id,
        display: `Screen ${allCards[i].cards[j].screen} - ${allCards[i].cards[j].title}`,
      };
      singleGameScreenArr.push(screenOjb);
    }
    screensArr.push(singleGameScreenArr);
  }
  return { gamesArr, screensArr };
};

const getCard = (cardId) => {
  const indexes = cardId.split("-");
  const gameIdx = indexes[0];
  const cardIdx = indexes[1];
  return allCards[gameIdx].cards[cardIdx];
};

export { getCardIds, getCard };
