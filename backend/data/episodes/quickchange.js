import { monthEnum } from "../../utils.js";
import { quickChangeAlt } from "../../utils.js";

const quickChangeEps = [
  {
    title: "QCtC: Street Fighter: The Movie (1993)",
    episode: 1,
    length: "2:45:19",
    published: new Date(2020, monthEnum.apr, 17),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Street-Fighter-The-Movie-ectgru",
    image: "qctc_001_Cover.jpg",
    blog: "qctc_001_street_fighter.md",
    altText: quickChangeAlt(
      "1st",
      "Street Fighter: The Movie",
      "the cast of doing their winning poses."
    ),
    isPublished: true,
  },
  {
    title: "QCtC: Double Dragon: The Movie (1993)",
    episode: 2,
    length: "1:28:27",
    published: new Date(2020, monthEnum.nov, 26),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Quick-Change-the-Channel-Double-Dragon-en0ugp",
    image: "qctc_002_Cover.jpg",
    blog: "qctc_002_double_dragon.md",
    altText: quickChangeAlt(
      "2nd",
      "Double Dragon",
      "Scott Wolf as Billy Lee, Mark Dacascos as Jimmy Lee, and Henry Kingi as Abobo"
    ),
    isPublished: true,
  },
  {
    title: "QCtC: Mortal Kombat: The Movie (1995)",
    episode: 3,
    length: "2:50:38",
    published: new Date(2021, monthEnum.nov, 26),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Mortal-Kombat-The-Movie-1995-e1as7qn",
    image: "qctc_003_Cover.jpg",
    blog: "qctc_003_mortal_kombat.md",
    altText: quickChangeAlt("3rd", "Mortal Kombat", "Robin Shou as Liu Kang"),
    isPublished: true,
  },
  {
    title: "QCtC: Five Nights at Freddy's: The Movie (2023)",
    episode: 4,
    length: "57:25",
    published: new Date(2023, monthEnum.nov, 23),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Quick--Change-the-Channel---Five-Nights-at-Freddys-e2cas7s",
    image: "qctc_004_Cover.jpg",
    blog: "qctc_004_five_nights.md",
    altText: quickChangeAlt(
      "4th",
      "Five Nights at Freddy's",
      "Matthew Lillard as Steve Raglan"
    ),
    isPublished: true,
  },
];

export default quickChangeEps;
