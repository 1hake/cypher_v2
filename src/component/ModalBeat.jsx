import React, { useState, useContext } from "react";

import { ReactPlayer } from "react-player";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  List,
  ListItem,
  Button,
  ListItemAvatar,
} from "@material-ui/core";
import { MyContext } from "../reducer/GameContext";

export const ModalBeat = ({ content }) => {
  const {
    instru,
    setInstru,
    setModalOpen,
    modalOpen,
    setPlaying,
    playing,
  } = useContext(MyContext);
  return (
    <Dialog
      open={modalOpen}
      onClose={() => {
        setModalOpen(false);
        setPlaying(false);
      }}
    >
      <DialogTitle style={{ color: "white", backgroundColor: content.color }}>
        {content.title}
      </DialogTitle>
      <List>
        {content.items.map((item) => {
          return (
            <ListItem
              onClick={() => {
                setInstru(item.url);
                setPlaying(!playing);
              }}
            >
              <ListItemAvatar>
                {instru === item.url ? (
                  <i
                    style={{ color: "#FFEF51" }}
                    class="fa-3x  fas fa-play-circle"
                  ></i>
                ) : (
                  <i class="fa-3x fas fa-play-circle"></i>
                )}
              </ListItemAvatar>
              <span>{item.name}</span>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
};
