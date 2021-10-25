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
import getRealmApp from "../../../_globals/providers/getRealmApp";

const app = getRealmApp();

export default function LoginContainer({ children }: any): ReactElement {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  async function RealmLogin() {
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      const user = await app.logIn(credentials);
      console.log("Successfully logged in!", user.id);
      return user;
    } catch (err) {
      console.log("Failed to log in");
    }
  }
  return (
    <Box style={styles.container}>
      <Text>THIS IS A TEST 7</Text>
      <Input
        style={styles.inputBox}
        placeholder="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        style={styles.inputBox}
        placeholder="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={() => RealmLogin()} />
    </Box>
  );
}

/* <AuthProvider>
</AuthProvider> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  inputBox: {
    backgroundColor: "#efefef",
    borderWidth: 1,
    width: 300,
  },
});
