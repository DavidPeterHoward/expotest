import React, {
  ReactElement,
  useEffect,
  useState,
  useContext,
  useReducer,
} from "react";
import { StyleSheet, Platform } from "react-native";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Row,
  Stack,
  VStack,
  Column,
  ZStack,
  Button,
  Input,
  TextArea,
  Text,
} from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AppContainer({ children }: any): ReactElement {
  return (
    <Box p={5} m={5}>
      {children}
    </Box>
  );
}
