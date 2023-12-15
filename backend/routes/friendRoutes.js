import express from "express";
import allFriends from "../data/friends.js";

const router = express.Router();

router.get("/", (req, res) => {
  const faqs = allFriends.filter((friend) => !!friend.url);
  res.status(200).json(faqs);
});

export default router;
