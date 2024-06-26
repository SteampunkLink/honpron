const allGames = [
  {
    title: "Jurassic Park",
    manualURL: "https://archive.org/details/jurassic-park-usa-rev-1",
    mobyURL: "https://www.mobygames.com/game/38365/jurassic-park/",
    rank: "C",
  },
  {
    title: "Pink Goes to Hollywood",
    manualURL:
      "https://archive.org/details/pink-goes-to-hollywood-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/141848/pink-goes-to-hollywood/",
    rank: "D",
  },
  {
    title: "The Lawnmower Man",
    manualURL: "https://archive.org/details/lawnmower-man-the-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/20334/the-lawnmower-man/",
    rank: "C",
  },
  {
    title: "Disney's Aladdin",
    manualURL: "https://archive.org/details/disneys-aladdin-usa",
    mobyURL: "https://www.mobygames.com/game/43932/disneys-aladdin/",
    rank: "A",
  },
  {
    title: "Robocop vs. The Terminator",
    manualURL: "https://archive.org/details/robo-cop-versus-the-terminator-usa",
    mobyURL:
      "https://www.mobygames.com/game/10381/robocop-versus-the-terminator/",
    rank: "B",
  },
  {
    title: "Total Carnage",
    manualURL: "https://archive.org/details/total-carnage-usa",
    mobyURL: "https://www.mobygames.com/game/15506/total-carnage/",
    rank: "C",
  },
  {
    title: "Clay Fighter",
    manualURL: "https://archive.org/details/clay-fighter-usa",
    mobyURL: "https://www.mobygames.com/game/8630/clay-fighter/",
    rank: "D",
  },
  {
    title: "Out to Lunch",
    manualURL: "https://archive.org/details/out-to-lunch-usa/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/12837/pierre-le-chef-is-out-to-lunch/",
    rank: "C",
  },
  {
    title: "Ranma 1/2: Hard Battle",
    manualURL: "https://archive.org/details/ranma-1-2-hard-battle-usa",
    mobyURL: "https://www.mobygames.com/game/30977/ranma-12-hard-battle/",
    rank: "B",
  },
  {
    title: "Clock Tower",
    manualURL: "",
    mobyURL: "",
    rank: "A",
  },
  {
    title: "Super Mario World",
    manualURL: "https://archive.org/details/super-mario-world-usa",
    mobyURL: "https://www.mobygames.com/game/6591/super-mario-world/",
    rank: "A",
  },
  {
    title: "F-Zero",
    manualURL: "https://archive.org/details/f-zero-usa",
    mobyURL: "https://www.mobygames.com/game/6630/f-zero/",
    rank: "A",
  },
  {
    title: "Gradius III",
    manualURL: "https://archive.org/details/gradius-iii-usa",
    mobyURL: "https://www.mobygames.com/game/12034/gradius-iii/",
    rank: "C",
  },
  {
    title: "Pilotwings",
    manualURL: "https://archive.org/details/pilotwings-usa",
    mobyURL: "https://www.mobygames.com/game/6632/pilotwings/",
    rank: "B",
  },
  {
    title: "SimCity",
    manualURL: "https://archive.org/details/sim-city-usa",
    mobyURL: "https://www.mobygames.com/game/848/simcity/",
    rank: "A",
  },
  {
    title: "Battle Cars",
    manualURL: "https://archive.org/details/battle-cars-usa",
    mobyURL: "https://www.mobygames.com/game/32593/battle-cars/",
    rank: "C",
  },
  {
    title: "Super Chase H.Q.",
    manualURL: "https://archive.org/details/super-chase-h.-q-pal",
    mobyURL:
      "https://www.mobygames.com/game/13230/super-chase-criminal-termination/",
    rank: "D",
  },
  {
    title: "Super Nova",
    manualURL: "https://archive.org/details/super-nova-usa",
    mobyURL: "https://www.mobygames.com/game/10513/super-nova/",
    rank: "D",
  },
  {
    title: "The Adventures of Dr. Franken",
    manualURL: "https://archive.org/details/adventures-of-dr-franken-the-usa",
    mobyURL:
      "https://www.mobygames.com/game/9328/the-adventures-of-dr-franken/",
    rank: "F",
  },
  {
    title: "Jim Power: Lost Dimension in 3D",
    manualURL:
      "https://archive.org/details/jim-power-the-lost-dimension-in-3-d-usa/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/31047/jim-power-the-lost-dimension-in-3d/",
    rank: "F",
  },
  {
    title: "Inspector Gadget",
    manualURL: "https://archive.org/details/inspector-gadget-usa",
    mobyURL: "https://www.mobygames.com/game/21517/inspector-gadget/",
    rank: "B",
  },
  {
    title: "Art of Fighting",
    manualURL: "https://archive.org/details/art-of-fighting-usa",
    mobyURL: "https://www.mobygames.com/game/13035/art-of-fighting/",
    rank: "A",
  },
  {
    title: "Battle Blaze",
    manualURL: "https://archive.org/details/battle-blaze-usa",
    mobyURL: "https://www.mobygames.com/game/27479/battle-blaze/",
    rank: "D",
  },
  {
    title: "TMNT: Tournament Fighters",
    manualURL:
      "https://archive.org/details/teenage-mutant-ninja-turtles-tournament-fighters-usa",
    mobyURL:
      "https://www.mobygames.com/game/31025/teenage-mutant-ninja-turtles-tournament-fighters/",
    rank: "A",
  },
  {
    title: "Metal Marines",
    manualURL: "https://archive.org/details/metal-marines-pal",
    mobyURL: "https://www.mobygames.com/game/4620/metal-marines/",
    rank: "C",
  },
  {
    title: "Soldiers of Fortune",
    manualURL: "https://archive.org/details/soldiers-of-fortune-usa",
    mobyURL: "https://www.mobygames.com/game/933/soldiers-of-fortune/",
    rank: "C",
  },
  {
    title: "Lufia and the Fortress of Doom",
    manualURL: "https://archive.org/details/lufia-the-fortress-of-doom-usa",
    mobyURL: "https://www.mobygames.com/game/9980/lufia-the-fortress-of-doom/",
    rank: "B",
  },
  {
    title: "Super R-Type",
    manualURL: "https://archive.org/details/super-r-type-usa",
    mobyURL: "https://www.mobygames.com/game/7148/super-r-type/",
    rank: "B",
  },
  {
    title: "Drakkhen",
    manualURL: "https://archive.org/details/drakkhen-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/1969/drakkhen/",
    rank: "D",
  },
  {
    title: "UN Squadron",
    manualURL: "https://archive.org/details/u.-n.-squadron-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/8061/un-squadron/",
    rank: "A",
  },
];

export default allGames;
