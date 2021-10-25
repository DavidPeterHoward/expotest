import React from "react";
// import { StyleSheet, Text, TextInput, View, Platform } from "react-native";
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc

import Button from "../components/_atoms/Button";
import Text from "../components/_atoms/Text";
import Box from "../components/_atoms/Box";
import Image from "../components/_atoms/Image";
// import Input
// import Heading/Text styles & Sizes

// TODO: Add correct fonts in
// TODO: Add correct font-sizing in
// TODO: Add variants from components into this folder

const components = {
  Button, 
  Text,
  Box,
  Image,
};

const colorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
    evrGreen: "#86D800",
    evrPurple: "#7000FF",
    lightGray: "#939393",
  },
};

const theme = extendTheme({ colors: colorTheme, components: components });

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
/* // 2. Get the type of the CustomTheme
type CustomThemeType = typeof theme;

// 3. Extend the internal NativeBase Theme
declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
 */
// 3. Pass the `theme` prop to the `NativeBaseProvider`
export default function NativeBaseContextProvider({ children }: any): any {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
