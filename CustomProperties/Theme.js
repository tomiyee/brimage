import React from "react";
import { configureFonts, DefaultTheme } from "react-native-paper";
import customFonts from "./Fonts";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2d3142",
    accent: "#4f5d75",
    background: '#FFFFFF',
    surface: '#FAFAFA'
  },
};

export default theme;