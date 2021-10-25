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
  VStack,
  Column,
  ZStack,
  Button,
  Input,
  TextArea,
  Text,
  Stack,
} from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Imports:
import DashboardContainer from "../screens/Dashboard";
import BusinessesContainer from "../screens/Businesses";
import WalletContainer from "../screens/Wallet";
import BusinessProfile from "../screens/Business Profile";

const Tab = createBottomTabNavigator();
const BusinessesStack = createNativeStackNavigator();

export default function NavigationNavigator({ children }: any): ReactElement {
  // Once the user is authenticated and logged in (via register, or login) then
  // this will control the navigation and routing for the application
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardContainer} />
      <Tab.Screen name="Businesses" component={BusinessesStackScreen} />
      <Tab.Screen name="Wallet" component={WalletContainer} />
    </Tab.Navigator>
  );
}

const BusinessesStackScreen = () => {
  return(
    <BusinessesStack.Navigator>
      <BusinessesStack.Screen name="businesses" component={BusinessesContainer}/>
      <BusinessesStack.Screen name="BusinessProfile" component={BusinessProfile}/>
</BusinessesStack.Navigator>
  )
}