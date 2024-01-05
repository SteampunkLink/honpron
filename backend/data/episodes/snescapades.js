import { monthEnum } from "../../utils.js";

const snescapadesEps = [
  {
    title: "Jurassic Park Edition",
    episode: 0,
    length: "1:18:38",
    published: new Date(2023, monthEnum.sep, 30),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Jurassic-Park-Edition-e2agnb5",
    youtubeURL: "https://youtu.be/Vw1gSmGUbf8?si=AdAMdUM9RWqpiLqh",
    image: "001_Cover.jpg",
    blog: "001_jurassic_park.md",
    games: [0, 1, 2],
    isPublished: true,
  },
  {
    title: "Aladdin Edition",
    episode: 1,
    length: "55:19",
    published: new Date(2023, monthEnum.oct, 12),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Aladdin-Edition-e2agpqj",
    youtubeURL: "https://youtu.be/FA5PMD0G6eA?si=IPkEx2lG3VCdbtKx",
    image: "002_Cover.jpg",
    blog: "002_aladdin.md",
    games: [3, 4, 5],
    isPublished: true,
  },
  {
    title: "Clock Tower Edition",
    episode: 2,
    length: "1:09:18",
    published: new Date(2023, monthEnum.oct, 31),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Clock-Tower-Edition-e2b9j0g",
    youtubeURL: "https://youtu.be/OEXWU-aYYN8?si=_AR07Oez5_kTkdEW",
    image: "003_Cover.jpg",
    blog: "003_clock_tower.md",
    games: [9],
    isPublished: true,
  },
  {
    title: "Clay Fighter Edition",
    episode: 3,
    length: "1:02:50",
    published: new Date(2024, monthEnum.jan, 4),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Clay-Fighter-Edition-e2e0j3q",
    youtubeURL: "https://youtu.be/wNXP6QcbzKM?si=_TkcHxybePq0n9vR",
    image: "004_Cover.jpg",
    blog: "004_clay_fighter",
    games: [6, 7, 8],
    isPublished: true,
  },
];

export default snescapadesEps;
