import { useState, useEffect } from "react";

const dotPositions = ["-7px", "-70px", "-132px", "-194px"];

const Dot = ({ index, locations, token, resetScratch }) => {
  const [scratchPattern, setScratchPattern] = useState(dotPositions[0]);
  const scratchOff = () => {
    setScratchPattern(dotPositions[1]);
    setTimeout(() => setScratchPattern(dotPositions[2]), 300);
    setTimeout(() => setScratchPattern(dotPositions[3]), 600);
  };

  useEffect(() => {
    if (resetScratch) {
      setScratchPattern(dotPositions[0]);
    }
  }, [resetScratch]);

  return (
    <>
      <div
        className="dot"
        onClick={() => scratchOff()}
        style={{
          left: `${locations[0][index]}px`,
          top: `${locations[1][index]}px`,
        }}
      >
        <div
          className="scratch-off"
          style={{
            background: `url(images/scratchcards/scratch_sprite.png) ${scratchPattern} ${
              dotPositions[index % 4]
            }`,
          }}
        ></div>
        <img src={`images/scratchcards/tokens/token-${token}.png`} />
      </div>
    </>
  );
};

export default Dot;
