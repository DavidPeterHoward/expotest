import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Realm from "realm";

const app = new Realm.App({ id: "application-0-onlxj" });

export default function App() {
  console.log(app);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
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
