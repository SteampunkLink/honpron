import express from "express";
import { defaultCard } from "../data/cards.js";
import { getCardIds, getCard } from "../controllers/cardCtrl.js";

const router = express.Router();

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
