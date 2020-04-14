import React, { useState, useContext } from "react";
import { beatList } from "../data/instru";
import { MyContext } from "../reducer/GameContext";
import { ModalBeat } from "./ModalBeat";

export const BeatList = (props) => {
  const { ModalOpen, setModalOpen } = useContext(MyContext);
  const [content, setContent] = useState({ items: [] });

  return (
    <div class="col-xs-10 d-flex  flex-wrap">
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
            class="d-flex justify-content-center align-items-center p-2 m-2"
          >
            {item.title}
          </div>
        );
      })}
      {/* <input
        class="form-control"
        type="text"
        placeholder="Youtube Link"
        onChange={(e) => {
          console.log(e.target.value);
          setInstru(e.target.value.split("=")[1]);
        }}
      /> */}
      <ModalBeat content={content}></ModalBeat>
    </div>
  );
};
