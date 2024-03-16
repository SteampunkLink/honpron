export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export const monthEnum = {
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

export const snescapadesAlt = (epNum, sprite, games) => {
  return `A cover image for the ${epNum} episode of SNEScapdes which features A design in the style of a trading card features a black border with colored shapes evoking the Super NES North American box art design. In the center is a sprite of ${sprite} with a drop shadow on top of artistically filtered screen shots of the game. Text in the top left reads “SNEScapades” in all caps with a red italic font similar to the font Nintendo used in the “Super Nintendo” logo. Below that is a red bar with the word “Podcast” written in a black, pixelated font. At the bottom of the card in gold typeface reads ${games}. Off to the sides of the card, a metallic background is visible with the words “PLAY IT LOUD” embossed in it diagonally and repeating in the style of the Industrial Grunge font used by Nintendo for their “Play it Loud” advertising.`;
};

export const theWrapAlt = (epNum, wrapMonth) => {
  return `A cover image for the ${epNum} episode of SNEScapdes, which features a design in the style of a trading card features a black border with colored shapes evoking the Super NES North American box art design. In the center is a simple drawing of a tortilla-wrapped sandwich with a colorful Super NES controller sticking out of the side. Text above the sandwich reads “The Wrap”. The background features the boxes of the SNES games talked about in the episode. Text in the top left reads “SNEScapades” in all caps with a red italic font similar to the font Nintendo used in the “Super Nintendo” logo. Below that is a red bar with the word “Podcast” written in a black, pixelated font. At the bottom of the card in gold typeface reads “${wrapMonth}”. Off to the sides of the card, a metallic background is visible with the words “PLAY IT LOUD” embossed in it diagonally and repeating in the style of the Industrial Grunge font used by Nintendo for their “Play it Loud” advertising.`;
};

export const playingWithPowerAlt = (epNum, issueMonth) => {
  return `A cover image for the ${epNum} epsiode of SNEScapades, which features a design in the style of a magazine cover. The background is a collage of images taken from the pages of the ${issueMonth} issue of Nintendo Power magazine. At the top, text reads “Playing with Power” stylized to look like the original Nintendo Power logo, with ${issueMonth} written below. At the very bottom, in yellow text on a red background reads “A SNEScapades Podcast Production”.`;
};

export const quickChangeAlt = (epNum, movie, character) => {
  return `A cover image for the ${epNum} episode of “Quick, Change the Channel” which features a drawing of Street Fighter character Zangief as he appeared in the 1993 Street Fighter: The Movie. To the right of him, is the title “Quick Change the Channel” in a cartoony font and simple yellow starburst behind it. Below this is a picture of an old CRT television with a wood grain frame. The screen of the television displays a screenshot from the film ${movie} which features ${character}.`;
};
