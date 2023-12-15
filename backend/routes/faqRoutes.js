import express from "express";
import allFaqs from "../data/faqs.js";

const router = express.Router();

const getAllFaqs = () => {
  return allFaqs;
};

router.get("/", (req, res) => {
  const faqs = getAllFaqs();
  res.status(200).json(faqs);
});

export default router;
