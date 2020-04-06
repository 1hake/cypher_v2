import React, { useState, useEffect } from "react";
import { words } from "../data/mode";
import { useContext } from "react";
import { MyContext } from "../reducer/GameContext";
import { capitalize } from "../tools/getRandomColor";

const containerStyle = {
  display: "flex",
  flexDirection: "columm",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  width: "80%",
  margin: "50px",
};

const itemStyle = (checked) => {
  return {
    color: !checked ? "white" : "black",
    fontFamily: "Barlow",
    fontSize: "2em",
  };
};

function Item(word, setCount, count) {
  const { wordList } = useContext(MyContext);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(false);
  }, [wordList]);

  return (
    <h4
      onClick={() => {
        if (checked) {
          setCount(count - 1);
          setChecked(!checked);
        }
        setCount(count + 1);
        setChecked(!checked);
      }}
      style={{ ...itemStyle(checked) }}
      class="p-4"
    >
      {capitalize(word)}
    </h4>
  );
}

export function WordContainer({ player }) {
  const { wordList, setPlayerScore } = useContext(MyContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setPlayerScore(player, count);
  }, [count]);
  useEffect(() => {
    setCount(0);
  }, [wordList]);

  return (
    <div style={{ ...containerStyle }}>
      <h6>
        Placez les mots suivants sur l'instru et cliquez dessus pour valider le
        score
      </h6>
      <div class="d-flex flex-wrap justify-content-center">
        {wordList.map((word) => {
          return Item(word, setCount, count);
        })}
      </div>
    </div>
  );
}
