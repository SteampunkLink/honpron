import { useState, useEffect } from "react";
import { useGetCardListQuery } from "../slices/cardsApiSlice";
import Meta from "../components/Meta";
import Loading from "../components/Loading";
import ScratchCard from "../components/ScratchCard";

const ScratchCardScreen = () => {
  const { data: cardIdData, isLoading, error } = useGetCardListQuery();
  const [gameId, setGameId] = useState(0);
  const [screenId, setScreenId] = useState("");

  const updateGame = (e) => setGameId(e.target.value);
  const updateScreen = (e) => setScreenId(e.target.value);
  return (
    <>
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <Meta />
      <div className="nintendo-scratch-cards">
        <nav>
          {cardIdData?.gamesArr?.length && (
            <div className="nintendo-scratch-cards_form-group">
              <label htmlFor="game">Select Game</label>
              <select
                name="game"
                id="gameSelect"
                value={gameId}
                onChange={updateGame}
              >
                {cardIdData.gamesArr.map((g, idx) => (
                  <option key={idx} value={idx}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          )}
          {cardIdData?.screensArr[gameId]?.length && (
            <div className="nintendo-scratch-cards_form-group">
              <label htmlFor="screen">Select Screen</label>
              <select
                name="screen"
                id="screenSelect"
                value={screenId}
                onChange={updateScreen}
              >
                <option disabled hidden value="">
                  - Pick a Screen -
                </option>
                {cardIdData.screensArr[gameId].map((s, idx) => (
                  <option key={s.value} value={`${gameId}-${idx}-${s.value}`}>
                    {s.display}
                  </option>
                ))}
              </select>
            </div>
          )}
        </nav>
        <ScratchCard id={screenId} />
      </div>
    </>
  );
};

export default ScratchCardScreen;
