import React from "react";
import {
  ArrowUpward,
  ArrowDownward,
  Add,
  KeyboardBackspace,
  Close,
} from "@material-ui/icons";

export const UpVote = () => {
  return <ArrowUpward />;
};

export const DownVote = () => {
  return <ArrowDownward />;
};

export const AddIcon = () => {
  return <Add style={{ fontSize: 64 }} />;
};

export const Back = () => {
  return <KeyboardBackspace />;
};

export const Cancel = () => {
  return <Close />;
};
