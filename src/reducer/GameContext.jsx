import React, { useState } from "react";
import { useEffect } from "react";
import { getRandom } from "../tools/getRandomColor";
import { words, rwords } from "../data/mode";

export const MyContext = React.createContext(null);

export const GameContext = ({ children }) => {
  const [player1, setPlayer1] = useState({
    name: "Player 1",
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    name: "Player 2",
    score: 0,
  });

  const [step, setStep] = useState(1);
  const [finish, setFinish] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [wordList, setWordList] = useState(getRandom(words, 8));
  const [instru, setInstru] = useState(null);
  const [instruName, setInstruName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState("setup");

  const setPlayer = (player, element) => {
    if (player === 1) {
      setPlayer1({ ...player1, name: element });
    } else {
      setPlayer2({ ...player2, name: element });
    }
  };

  const setPlayerScore = (player, element) => {
    if (player === 1) {
      setPlayer1({ ...player1, score: element });
    } else {
      setPlayer2({ ...player2, score: element });
    }
  };

  const reset = () => {
    setPlaying(false);
    setFinish(false);
    setStep(1);
    setPlayerScore(1, 0);
    setPlayerScore(2, 0);
  };

  useEffect(() => {
    if (step > 2) {
      setFinish(true);
    }
    setWordList(getRandom(rwords, 8));
  }, [step]);

  return (
    <MyContext.Provider
      value={{
        setPlayer,
        player1,
        player2,
        instru,
        setInstru,
        step,
        setStep,
        finish,
        setFinish,
        playing,
        setPlaying,
        wordList,
        setPlayerScore,
        reset,
        modalOpen,
        setModalOpen,
        page,
        setPage,
        instruName,
        setInstruName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
