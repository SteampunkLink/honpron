import { useEffect, useState } from "react";
import { useGetCardQuery } from "../slices/cardsApiSlice";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import flatten from "../utils/shuffle";
import Dot from "./Dot";

const ScratchCard = ({ id }) => {
  const { data: cardData, isLoading, error } = useGetCardQuery(id);
  const [tokens, setTokens] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [cardBack, setCardBack] = useState(
    "images/scratchcards/mario/screen0.jpg"
  );

  const flipCard = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      setCardBack(
        `images/scratchcards/${cardData.directory}/screen${cardData.screen}.jpg`
      );
    }, 300);
  };

  useEffect(() => {
    if (cardData?.groups?.length) {
      const shuffled = flatten(cardData.groups);
      setTokens(shuffled);
      flipCard();
    } else {
      setTokens([]);
    }
  }, [cardData]);
  return (
    <>
      {isLoading && <Loading />}
      {cardData && (
        <div id="cardArea" className={`flip-container${isActive && " active"}`}>
          <div className="flipper">
            <div
              id="cardAreaFront"
              className={`front ${cardData?.type || "long"}`}
              style={{
                backgroundImage: `url(images/scratchcards/${cardData.directory}/screen${cardData.screen}.jpg)`,
              }}
            >
              {tokens.length &&
                tokens.map((t, idx) => (
                  <Dot
                    key={idx}
                    index={idx}
                    locations={cardData.locations}
                    token={tokens[idx]}
                  />
                ))}
            </div>

            {/* <div
              id="cardAreaBack"
              className={`back ${cardData.type}`}
              style={{ backgroundImage: cardBack }}
            ></div> */}
          </div>
        </div>
      )}
      {error && <ErrorMsg error={error} />}
      {cardData?.directions?.length && (
        <div id="instructionArea">
          <h2 id="instructionH2">{cardData.game}</h2>
          <h3 id="instructionH3">
            {cardData.title} (screen {cardData.screen} of 10)
          </h3>
          <div id="innerInstructions">
            <div id="instructionLeft">
              <h4>Instructions:</h4>
              <ul>
                {cardData.directions.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
            <div id="instructionRight">
              {cardData.pictures[1].map((p, idx) => (
                <div key={idx} className="instruction-section">
                  <img
                    src={`images/scratchcards/tokens/token-${cardData.pictures[0][idx]}.png`}
                    alt={cardData.pictures[0][idx]}
                  />
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScratchCard;
