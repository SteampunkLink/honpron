export const mario2Cards = [
  {
    id: "m2s1",
    title: "vs Pidget",
    screen: 1,
    type: "long",
    directory: "mario2",
    directions: [
      "Find 1 arrow to advance to right side of card",
      "Now find the grab and toss to win.",
      "You must uncover 1 arrow, 1 grab, and 1 toss to win. Find three falls and you lose.",
    ],
    pictures: [
      ["fall", "right", "grab", "toss"],
      [
        "Find 3 and You Lose",
        "Find 1 to Advance Right",
        "Find 1 to Get Pidget",
        "Find 1 to Win",
      ],
    ],
    groups: [
      ["right", "right", "fall", "fall", "fall"],
      ["grab", "grab", "toss", "fall", "fall"],
    ],
    locations: [
      ["77", "126", "163", "164", "146", "333", "316", "304", "351", "399"],
      ["90", "34", "24", "27", "27", "-203", "-201", "-199", "-229", "-272"],
    ],
  },
  {
    id: "m2s2",
    title: "vs Autobomb",
    screen: 2,
    type: "long",
    directory: "mario2",
    directions: [
      "Find 3 grabs and one arrow to advance.",
      "Uncover 3 cannon balls and you lose.",
      "You must uncover 1 arrow, 3 grabs, and 3 tosses to win.",
    ],
    pictures: [
      ["grab", "cannball", "right", "toss"],
      [
        "Find 3 to Win",
        "Find 3 and You Lose",
        "Find 1 to Advance",
        "Find 3 to Win",
      ],
    ],
    groups: [
      ["right", "grab", "grab", "grab", "cannonball", "cannonball"],
      [
        "toss",
        "toss",
        "toss",
        "toss",
        "cannonball",
        "cannonball",
        "cannonball",
      ],
    ],
    locations: [
      [
        "66",
        "114",
        "154",
        "150",
        "143",
        "141",
        "325",
        "321",
        "275",
        "309",
        "279",
        "327",
        "351",
      ],
      [
        "121",
        "86",
        "12",
        "28",
        "31",
        "33",
        "-197",
        "-190",
        "-221",
        "-231",
        "-238",
        "-273",
        "-276",
      ],
    ],
  },
  {
    id: "m2s3",
    title: "vs Tryclyde",
    screen: 3,
    type: "long",
    directory: "mario2",
    directions: [
      "Find 1 arrow and three mushroom blocks to advance.",
      "Find 3 fireballs and you lose.",
      "You must uncover 1 arrow, 3 mushroom blocks, and 3 tosses to win.",
    ],
    pictures: [
      ["right", "fireball", "mushroom", "toss"],
      [
        "Find 1 to Advance",
        "Find 3 and You Lose",
        "Find 3 to Win",
        "Find 3 to Win",
      ],
    ],
    groups: [
      [
        "right",
        "right",
        "mushroom",
        "mushroom",
        "mushroom",
        "fireball",
        "fireball",
      ],
      ["toss", "toss", "toss", "fireball", "fireball", "fireball"],
    ],
    locations: [
      [
        "49",
        "97",
        "139",
        "144",
        "148",
        "128",
        "84",
        "310",
        "289",
        "291",
        "328",
        "353",
        "303",
      ],
      [
        "40",
        "0",
        "-21",
        "-18",
        "-16",
        "-18",
        "-50",
        "-290",
        "-292",
        "-289",
        "-302",
        "-303",
        "-330",
      ],
    ],
  },
  {
    id: "m2s4",
    title: "Get the Key",
    screen: 4,
    type: "long",
    directory: "mario2",
    directions: [
      "Find The Key to win.",
      "Uncover 3 Phantos and you lose.",
      "You must uncover 1 arrow and 1 key to win.",
    ],
    pictures: [
      ["phanto", "right", "key"],
      ["Find 3 and You Lose", "Find 1 to Escape", "Must Find to Win"],
    ],
    groups: [
      [
        "key",
        "right",
        "right",
        "right",
        "right",
        "phanto",
        "phanto",
        "phanto",
        "phanto",
        "phanto",
        "phanto",
      ],
    ],
    locations: [
      [
        "101",
        "159",
        "303",
        "360",
        "72",
        "119",
        "168",
        "168",
        "314",
        "363",
        "406",
      ],
      [
        "71",
        "26",
        "-20",
        "-64",
        "-29",
        "-74",
        "-118",
        "-115",
        "-208",
        "-253",
        "-274",
      ],
    ],
  },
  {
    id: "m2s5",
    title: "Cross the Waterfall",
    screen: 5,
    type: "long",
    directory: "mario2",
    directions: [
      "Find 3 arrows to advance.",
      "Uncover 3 misses and you lose.",
      "You must uncover 3 arrows to win.",
    ],
    pictures: [
      ["right", "miss"],
      ["Find 3 and You Win", "Find 3 and You Lose"],
    ],
    groups: [
      ["right", "right", "right", "right", "miss", "miss", "miss"],
      ["miss", "miss", "miss"],
    ],
    locations: [
      ["82", "117", "170", "161", "299", "347", "395", "97", "299", "369"],
      ["201", "123", "55", "60", "-98", "-144", "-179", "-30", "-180", "-225"],
    ],
  },
  {
    id: "m2s7",
    title: "Cross the Bridge",
    screen: 7,
    type: "long",
    directory: "mario2",
    directions: [
      "Find one arrow to advance to next scratch-off area (right side of card). In area 1, find one turnip to defeat Shy Guy.",
      "Find 3 Shy Guys and you lose.",
      "To win you must uncover: 1 arrow, 1 turnip, and 1 toss.",
    ],
    pictures: [
      ["turnip", "shyguy", "right", "toss"],
      [
        "Find 1 to Win",
        "Find 3 and You Lose",
        "Find 1 and Advance Right",
        "Fight 1 to Win",
      ],
    ],
    groups: [
      ["right", "right", "right", "shyguy", "shyguy", "shyguy"],
      ["turnip", "turnip", "toss", "toss", "shyguy", "shyguy"],
    ],
    locations: [
      [
        "71",
        "108",
        "150",
        "155",
        "104",
        "88",
        "284",
        "321",
        "329",
        "329",
        "369",
        "414",
      ],
      [
        "30",
        "17",
        "-61",
        "-59",
        "-70",
        "-70",
        "-203",
        "-281",
        "-278",
        "-275",
        "-411",
        "-431",
      ],
    ],
  },
  {
    id: "m2s8",
    title: "vs Mouser",
    screen: 8,
    type: "long",
    directory: "mario2",
    directions: [
      "Find one arrow to advance to right side of card.",
      "Uncover 3 bombs and 3 grabs to defeat Mouser.",
      "3 BOOMS and you lose.",
    ],
    pictures: [
      ["bomb", "grab", "right", "boom"],
      [
        "Find 3 to Win",
        "Find 3 to Win",
        "Find 1 and Advance Right",
        "Find 3 and You Lose",
      ],
    ],
    groups: [
      ["bomb", "bomb", "right", "grab", "boom", "boom", "boom"],
      ["grab", "grab", "bomb", "bomb", "boom", "boom"],
    ],
    locations: [
      [
        "56",
        "108",
        "128",
        "161",
        "168",
        "120",
        "163",
        "395",
        "346",
        "307",
        "309",
        "316",
        "331",
      ],
      [
        "103",
        "63",
        "66",
        "-19",
        "4",
        "-20",
        "-38",
        "-273",
        "-317",
        "-331",
        "-328",
        "-325",
        "-322",
      ],
    ],
  },
  {
    id: "m2s9",
    title: "vs Panser",
    screen: 9,
    type: "long",
    directory: "mario2",
    directions: [
      "Find 3 Shy Guys to defeat Panser.",
      "If you uncover 3 fireballs, you lose.",
      "You need 1 arrow to advance.",
    ],
    pictures: [
      ["shyguy", "fireball", "right"],
      ["Find 3 and You Win", "Find 3 and You Lose", "Find 1 and Advance Right"],
    ],
    groups: [
      [
        "shyguy",
        "shyguy",
        "right",
        "right",
        "fireball",
        "fireball",
        "fireball",
      ],
      ["shyguy", "shyguy", "shyguy", "fireball", "fireball", "fireball"],
    ],
    locations: [
      [
        "45",
        "90",
        "128",
        "167",
        "129",
        "167",
        "151",
        "335",
        "303",
        "347",
        "345",
        "394",
        "357",
      ],
      [
        "107",
        "82",
        "1",
        "-11",
        "-22",
        "-36",
        "-34",
        "-282",
        "-259",
        "-324",
        "-322",
        "-365",
        "-365",
      ],
    ],
  },
  {
    id: "m2s10",
    title: "vs Cobrat",
    screen: 10,
    type: "long",
    directory: "mario2",
    directions: [
      "Scratch-off first area (left side of card) until you uncover the arrow to advance. Then proceed to the next scratch-off area (right side of card). You can't win until both arrow and tosses are uncovered. Finally, scratch off circle over Princess Toadstool. Congratulations!",
    ],
    pictures: [
      ["right", "shyguy", "toss", "kiss"],
      [
        "Find 1 and Advance Right",
        "Find 3 and You Lose",
        "Find 2 to Win",
        "My Hero!",
      ],
    ],
    groups: [
      ["right", "right", "toss", "shyguy", "shyguy", "shyguy"],
      ["toss", "toss", "shyguy", "shyguy", "shyguy"],
      ["kiss"],
    ],
    locations: [
      [
        "40",
        "86",
        "165",
        "126",
        "133",
        "118",
        "368",
        "318",
        "286",
        "296",
        "296",
        "411",
      ],
      [
        "87",
        "27",
        "-25",
        "-35",
        "-30",
        "-27",
        "-205",
        "-264",
        "-267",
        "-251",
        "-249",
        "-365",
      ],
    ],
  },
];