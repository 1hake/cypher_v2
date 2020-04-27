import React, { useState, useContext } from "react";
import { beatList } from "../data/instru";
import { MyContext } from "../reducer/GameContext";
import { ModalBeat } from "./ModalBeat";

import { CurrentInstru } from "./currentInstru";

export const BeatList = (props) => {
  const { ModalOpen, setModalOpen, instruName } = useContext(MyContext);
  const [content, setContent] = useState({ items: [] });

  return (
    <div class=" d-flex  flex-column align-items-center justify-content-center ">
      {instruName && <CurrentInstru></CurrentInstru>}
      <div class=" d-flex  flex-wrap justify-content-center ">
        {beatList.map((item) => {
          return (
            <div
              onClick={() => {
                setModalOpen(true);
                setContent(item);
              }}
              style={{
                backgroundColor: item.color,
                borderRadius: "25px",
                color: "white",
              }}
              class="d-flex justify-content-center align-items-center p-3 m-2"
            >
              {item.title}
            </div>
          );
        })}

        <ModalBeat content={content}></ModalBeat>
      </div>
    </div>
  );
};
