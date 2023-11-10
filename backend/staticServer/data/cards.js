import { marioCards } from "./cards/superMario.js";
import { mario2Cards } from "./cards/superMario2.js";
import { zeldaCards } from "./cards/zelda.js";
import { zelda2Cards } from "./cards/zelda2.js";

export const defaultCard = {
  id: "0000",
  game: "",
  title: "",
  screen: 0,
  type: "long",
  directory: "mario",
  directions: [],
  pictures: [],
  groups: [],
  locations: [],
};

const m1 = {
  game: "Super Mario Bros.",
  cards: marioCards,
};

const m2 = {
  game: "Super Mario Bros. 2",
  cards: mario2Cards,
};

const z1 = {
  game: "The Legend of Zelda",
  cards: zeldaCards,
};

const z2 = {
  game: "Zelda 2: The Adventures of Link",
  cards: zelda2Cards,
};

const allCards = [m1, m2, z1, z2];

export default allCards;
