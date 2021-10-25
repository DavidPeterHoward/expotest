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
import TotalWalletBalanceCard from "../../components/_molecules/TotalWalletBalanceCard";
import WalletBalanceCard from "../../components/_molecules/WalletBalanceCard";

export default function WalletContainer({ children }: any): ReactElement {
  return (
    <Box>
      <Text>WalletContainer</Text>
      <TotalWalletBalanceCard />
      <WalletBalanceCard />
    </Box>
  );
}
