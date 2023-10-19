import { useState } from "react";
import { useGetRanksQuery } from "../slices/ranksApiSlice";

const RankScreen = () => {
  const { data: rankData, loading, error } = useGetRanksQuery();
  const [display, setDisplay] = useState("all");
  return (
    <div className="display-box">
      <div className="rank-controls">
        <h2>Current SNES Game Rankings</h2>
        <div className="rank-controls-buttons">
          <button onClick={() => setDisplay("all")} className="hp-btn all-rank">
            All
          </button>
          <button onClick={() => setDisplay("a")} className="hp-btn a-rank">
            A
          </button>
          <button onClick={() => setDisplay("b")} className="hp-btn b-rank">
            B
          </button>
          <button onClick={() => setDisplay("c")} className="hp-btn c-rank">
            C
          </button>
          <button onClick={() => setDisplay("d")} className="hp-btn d-rank">
            D
          </button>
          <button onClick={() => setDisplay("f")} className="hp-btn f-rank">
            F
          </button>
          <button onClick={() => setDisplay("u")} className="hp-btn u-rank">
            U
          </button>
        </div>
      </div>

      <div className="rank-container">
        {rankData?.A && (display === "all" || display === "a") && (
          <div className="rank-box">
            <h3 className="a-rank">A</h3>
            <ul>
              {rankData.A.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        )}
        {rankData?.B && (display === "all" || display === "b") && (
          <div className="rank-box">
            <h3 className="b-rank">B</h3>
            <ul>
              {rankData.B.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        )}
        {rankData?.C && (display === "all" || display === "c") && (
          <div className="rank-box">
            <h3 className="c-rank">C</h3>
            <ul>
              {rankData.C.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        )}
        {rankData?.D && (display === "all" || display === "d") && (
          <div className="rank-box">
            <h3 className="d-rank">D</h3>
            <ul>
              {rankData.D.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        )}
        {rankData?.F && (display === "all" || display === "f") && (
          <div className="rank-box">
            <h3 className="f-rank">F</h3>
            <ul>
              {rankData.F.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        )}
        {rankData?.U && (display === "all" || display === "u") && (
          <div className="rank-box">
            <h3 className="u-rank">U</h3>
            <ul>
              {rankData.U.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankScreen;
