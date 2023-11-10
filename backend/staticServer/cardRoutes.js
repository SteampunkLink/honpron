import express from "express";
import allCards, { defaultCard } from "./data/cards.js";

const router = express.Router();

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

router.get("/list", (req, res) => {
  const data = getCardIds();
  res.send(data);
});

router.get("/", (req, res) => {
  res.status(200).json(defaultCard);
});

router.get("/:id", (req, res) => {
  const card = getCard(req.params.id);
  if (!card) {
    res.status(404);
    throw new Error("Card not found.");
  }
  res.status(200).json(card);
});

export default router;
