const monthEnum = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const allEntries = {
  snescapades: {
    title: "SNEScapades",
    description:
      "Our flagship podcast series where Chase Keys and Emmy Zero discuss every Super NES game released in North America. We play them briefly, judge them harshly, and rank them.",
    episodes: [
      {
        title: "Jurassic Park Edition",
        episode: 0,
        length: "1:18:38",
        published: new Date(2023, monthEnum.sep, 30),
        embedURL:
          "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Jurassic-Park-Edition-e2agnb5",
        youtubeURL: "https://youtu.be/Vw1gSmGUbf8?si=AdAMdUM9RWqpiLqh",
        type: "podcast",
        image: "001_Cover.jpg",
        blog: "001_jurassic_park.md",
        games: [0, 1, 2],
      },
      {
        title: "Aladdin Edition",
        episode: 1,
        length: "55:19",
        published: new Date(2023, monthEnum.oct, 12),
        embedURL:
          "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Aladdin-Edition-e2agpqj",
        youtubeURL: "https://youtu.be/FA5PMD0G6eA?si=IPkEx2lG3VCdbtKx",
        type: "podcast",
        image: "002_Cover.jpg",
        blog: "002_aladdin.md",
        games: [3, 4, 5],
      },
      {
        title: "Clock Tower Edition",
        episode: 3,
        length: "1:09:18",
        published: new Date(2023, monthEnum.oct, 31),
        embedURL:
          "https://podcasters.spotify.com/pod/show/honest-piranha/episodes/Clock-Tower-Edition-e2b9j0g",
        youtubeURL: "https://youtu.be/OEXWU-aYYN8?si=_AR07Oez5_kTkdEW",
        type: "podcast",
        image: "003_Cover.jpg",
        blog: "003_clock_tower.md",
        games: [9],
      },
      {
        title: "Clay Fighter Edition",
        episode: 4,
        length: "",
        published: new Date(),
        embedURL: "",
        youtubeURL: "",
        type: "podcast",
        image: "004_Cover.jpg",
        blog: "004_clay_fighter.md",
        games: [6, 7, 8],
      },
    ],
  },
};

export default allEntries;
