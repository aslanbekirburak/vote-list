import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    pointBg: "#ececec",
    bgLight: "#f7f7f7",
    borderLight: "#eeeeee",
    borderDark: "#a4a4a4",
    underlineLight: "#a9a9a9",
    fontLight: "#959595",
    fontDark: "#5a5a5a",
    dropdownBorder: "#d6d1d1",
    optionColor: "#d8d8d8",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
