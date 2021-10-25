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

import { NavigationContainer } from "@react-navigation/native";
import NavigationNavigator from "./navigation";

interface Props {}

export default function ApplicationEntry({}: Props): ReactElement {
  return (
    <NavigationContainer>
      <NavigationNavigator />
    </NavigationContainer>
  );
}
