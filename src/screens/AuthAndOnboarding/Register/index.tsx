// vscode-fold=#
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

export default function RegisterContainer({ children }: any): ReactElement {
  return (
    <Box>
      <Text>RegisterContainer Component</Text>
    </Box>
  );
}

/* 
REGISTER PROCESS:

Onboarding Screens: (information)

- Request Location
- Request Email
- 

How does a user login on a new device
How does a user re-login on a remembered device




*/
