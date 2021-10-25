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

export default function DashboardContainer({
  children,
  navigation,
}: any): ReactElement {
  return (
    <Box>
      <Text>Dashboard Container</Text>
      <Button
        size="md"
        variant="themeTester"
        onPress={() => navigation.navigate("Businesses")}
      >
        Test Button
      </Button>
    </Box>
  );
}