import React from "react";
import { StyleSheet, Platform } from "react-native";
import { StatusBar, Box, Center, NativeBaseProvider, Text } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import NativeBaseContextProvider from "./src/_themeProvider/";
import ApplicationEntry from "./src/ApplicationEntry";
import Realm from "realm";

export function StatusBarContainer(props: any) {
  const height = Platform.OS === "ios" ? 20 : -5;
  const { backgroundColor } = props;

  return (
    <Box style={{ height, backgroundColor }}>
      <StatusBar {...props} />
    </Box>
  );
}

const app = new Realm.App({ id: "application-0-onlxj" });

export default function App() {
  console.log(app);
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <StatusBarContainer
          backgroundColor="#8c8a92"
          barStyle="light-content"
        />
        <ApplicationEntry />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
