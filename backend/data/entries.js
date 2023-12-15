import snescapadesEps from "./episodes/snescapades.js";
import quickChangeEps from "./episodes/quickchange.js";

const allEntries = {
  snescapades: {
    title: "SNEScapades",
    description:
      "Our flagship podcast series where Chase Keys and Emmy Zero discuss every Super NES game released in North America. We play them briefly, judge them harshly, and rank them.",
    order: 1,
    episodes: snescapadesEps,
    type: "podcast",
  },
  quickChange: {
    title: "Quick, Change the Channel",
    description:
      "Our Yearly (mostly) show that we do around Thanksgiving time where we talk about a video-game based movie.",
    order: 2,
    episodes: quickChangeEps,
    type: "podcast",
  },
};

export default allEntries;
