import {
  monthEnum,
  playingWithPowerAlt,
  snescapadesAlt,
  theWrapAlt,
} from "../../utils.js";

const snescapadesEps = [
  {
    title: "Jurassic Park Edition",
    episode: 1,
    length: "1:18:38",
    published: new Date(2023, monthEnum.sep, 30),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Jurassic-Park-Edition-e2agnb5",
    youtubeURL: "https://youtu.be/Vw1gSmGUbf8?si=AdAMdUM9RWqpiLqh",
    image: "001_Cover.jpg",
    blog: "001_jurassic_park.md",
    games: [0, 1, 2],
    altText: snescapadesAlt(
      "1st",
      "Dr. Grant from Jurassic Park",
      '"Jurassic Park", "Pink Goes to Hollywood" and "The Lawnmower Man"'
    ),
    isPublished: true,
  },
  {
    title: "Aladdin Edition",
    episode: 2,
    length: "55:19",
    published: new Date(2023, monthEnum.oct, 12),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Aladdin-Edition-e2agpqj",
    youtubeURL: "https://youtu.be/FA5PMD0G6eA?si=IPkEx2lG3VCdbtKx",
    image: "002_Cover.jpg",
    blog: "002_aladdin.md",
    games: [3, 4, 5],
    altText: snescapadesAlt(
      "2nd",
      "Aladdin from Disney's Aladdin",
      '"Aladdin", "Robocop vs. Terminator" and "Total Carnage"'
    ),
    isPublished: true,
  },
  {
    title: "Clock Tower Edition",
    episode: 3,
    length: "1:09:18",
    published: new Date(2023, monthEnum.oct, 31),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Clock-Tower-Edition-e2b9j0g",
    youtubeURL: "https://youtu.be/OEXWU-aYYN8?si=_AR07Oez5_kTkdEW",
    image: "003_Cover.jpg",
    blog: "003_clock_tower.md",
    games: [9],
    altText: snescapadesAlt("3rd", "Jennifer from Clock Tower", "Clock Tower"),
    isPublished: true,
  },
  {
    title: "Clay Fighter Edition",
    episode: 4,
    length: "1:02:50",
    published: new Date(2024, monthEnum.jan, 4),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Clay-Fighter-Edition-e2e0j3q",
    youtubeURL: "https://youtu.be/wNXP6QcbzKM?si=_TkcHxybePq0n9vR",
    image: "004_Cover.jpg",
    blog: "004_clay_fighter.md",
    games: [6, 7, 8],
    altText: snescapadesAlt(
      "4th",
      "Bad Mr. Frosty from Clay Fighter",
      '"Clay Fighter", "Out to Lunch", "Ranma 1/2 Hard Battle"'
    ),
    isPublished: true,
  },
  {
    title: "The Wrap: November 1993",
    episode: 5,
    length: "1:03:29",
    published: new Date(2024, monthEnum.jan, 11),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/The-Wrap-November-93-e2eap44",
    youtubeURL: "https://youtu.be/fezm_an3OQU?si=Y-0QgIlN2iZdAaXE",
    image: "005_Cover.jpg",
    blog: "005_wrap_nov_93.md",
    altText: theWrapAlt("5th", "November 1993"),
    isPublished: true,
  },
  {
    title: "Playing with Power: August 1991",
    episode: 6,
    length: "1:09:40",
    published: new Date(2024, monthEnum.jan, 19),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/TPlaying-with-Power-August-1991-e2em5cd",
    youtubeURL: "https://youtu.be/Ue1u3YG2L3g?si=tmu59oJeMIvYQAdw",
    image: "006_Cover.jpg",
    blog: "006_pwp_aug_91.md",
    altText: playingWithPowerAlt("6th", "August 1991"),
    isPublished: true,
  },
  {
    title: "Super Mario World Edition",
    episode: 7,
    length: "40:48",
    published: new Date(2024, monthEnum.jan, 25),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Super-Mario-World-Edition-e2ev63m",
    youtubeURL: "https://youtu.be/lNXWPwhixUI",
    image: "007_Cover.jpg",
    blog: "007_super_mario_world.md",
    games: [10, 11],
    altText: snescapadesAlt(
      "7th",
      "Mario from Super Mario World",
      '"Super Mario World" and "F-Zero"'
    ),
    isPublished: true,
  },
  {
    title: "SimCity Edition",
    episode: 8,
    length: "55:39",
    published: new Date(2024, monthEnum.feb, 1),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/SimCity-Edition-e2f8q9p",
    youtubeURL: "https://youtu.be/HkZefzU1s0I",
    image: "008_Cover.jpg",
    blog: "008_simcity.md",
    games: [12, 13, 14],
    altText: snescapadesAlt(
      "8th",
      "Dr. Wright from SimCity",
      '"SimCity", "Gradius III", and "Pilotwings"'
    ),
    isPublished: true,
  },
  {
    title: "Playing with Power: December 1993",
    episode: 9,
    length: "1:27:14",
    published: new Date(2024, monthEnum.feb, 8),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-December-93-e2fhsl2",
    youtubeURL: "https://youtu.be/IlzLSSCJE3U",
    image: "009_Cover.jpg",
    blog: "009_pwp_dec_93.md",
    altText: playingWithPowerAlt("9th", "December 1993"),
    isPublished: true,
  },
  {
    title: "Battle Cars Edition",
    episode: 10,
    length: "58:17",
    published: new Date(2024, monthEnum.feb, 18),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Battle-Cars-Edition-e2g0ruj",
    youtubeURL: "https://youtu.be/hVj05CX_LQ8",
    image: "010_Cover.jpg",
    blog: "010_battle_cars.md",
    games: [15, 16, 17],
    altText: snescapadesAlt(
      "10th",
      "a spikey car from Battle Cars",
      '"Battle Cars", "Super Chase H.Q.", "Super Nova"'
    ),
    isPublished: true,
  },
  {
    title: "Inspector Gadget Edition",
    episode: 11,
    length: "49:35",
    published: new Date(2024, monthEnum.feb, 22),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Inspector-Gadget-Edition-e2g6s23",
    youtubeURL: "https://youtu.be/FdUfuxUBK-E",
    image: "011_Cover.jpg",
    blog: "011_inspector_gadget.md",
    games: [18, 19, 20],
    altText: snescapadesAlt(
      "11th",
      "Inspector Gadget from Inspector Gadget",
      '"Inspector Gadget", "The Adventures of Dr. Franken", and "Jim Power"'
    ),
    isPublished: true,
  },
  {
    title: "TMNT: Tournament Fighters Edition",
    episode: 12,
    length: "51:15",
    published: new Date(2024, monthEnum.feb, 29),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/TMNT-Tournament-Fighters-Edition-e2gg5rt",
    youtubeURL: "https://youtu.be/cUxfjpk_bhM",
    image: "012_Cover.jpg",
    blog: "012_tmnt_tournament_fighters.md",
    games: [21, 22, 23],
    altText: snescapadesAlt(
      "12th",
      "Aksa from TMNT: Tournament Fighters",
      '"TMNT: Tournament Fighters", "Art of Fighting", and "Battle Blaze"'
    ),
    isPublished: true,
  },
  {
    title: "Lufia and the Fortress of Doom Edition",
    episode: 13,
    length: "50:41",
    published: new Date(2024, monthEnum.mar, 8),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Lufia--the-Fortress-of-Doom-Edition-e2gr8u9",
    youtubeURL: "https://youtu.be/J--FjnlkqJI",
    image: "013_Cover.jpg",
    blog: "013_lufia.md",
    games: [24, 25, 26],
    altText: snescapadesAlt(
      "13th",
      "the main four party members from Lufia",
      '"Lufia and the Fortress of Doom", "Soldiers of Fortune", and "Metal Marines"'
    ),
    isPublished: true,
  },
  {
    title: "The Wrap: December 1993",
    episode: 14,
    length: "1:05:34",
    published: new Date(2024, monthEnum.mar, 14),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/The-Wrap-December-93-e2h4144",
    youtubeURL: "https://youtu.be/9OnfPLGSUsY",
    image: "014_Cover.jpg",
    blog: "014_wrap_dec_93.md",
    altText: theWrapAlt("14th", "December 1993"),
    isPublished: true,
  },
  {
    title: "Playing with Power: September 1991 (Part 1)",
    episode: 15,
    length: "57:52",
    published: new Date(2024, monthEnum.mar, 22),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-September-1991-Part-1-e2hesji",
    youtubeURL: "https://youtu.be/pWp5DQiwRgo",
    image: "015_Cover.jpg",
    blog: "015_pwp_sept_91_1.md",
    altText: playingWithPowerAlt(15, "September 1991"),
    isPublished: true,
  },
];

export default snescapadesEps;
