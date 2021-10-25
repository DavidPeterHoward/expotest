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
import { NavigationContainer } from "@react-navigation/native";
import NavigationNavigator from "./navigation";

import Login from "./screens/AuthAndOnboarding/Login";
import Register from "./screens/AuthAndOnboarding/Register";
import Onboarding from "./screens/AuthAndOnboarding/Onboarding";

import {
  AuthProvider,
  useAuth,
  AuthContext,
} from "./_globals/providers/AuthProvider";
import getRealmApp from "./_globals/providers/getRealmApp";

export default function ApplicationEntry({ children }: any): ReactElement {
  // const app = getRealmApp();
  // console.log(app);

  const app = new Realm.App({ id: "application-0-onlxj" });
  // This file will contain the businesses logic of the
  // entire login (with pin) & register & onboarding processes
  // after this is complete it will pass the Auth (Realm) to
  // the rest of the application

  const [realmCurrentUser, setRealmCurrentUser] = useState<any>("seans login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  async function RealmLogin() {
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      const user = await app.logIn(credentials);
      console.log(JSON.stringify(user));
      console.log("Successfully logged in!", user.id);

      setRealmCurrentUser(user);
      return user;
    } catch (err) {
      console.log("Failed to log in");
    }
  }

  async function RealmLogout() {
    try {
      realmCurrentUser.logOut();
      setRealmCurrentUser(null);
      console.log("Successfully logged out!");
    } catch (error) {
      console.log("Failed to log out");
    }
  }

  function RealmDetails() {
    console.log(realmCurrentUser?.isLoggedIn);
    console.log("accessToken", realmCurrentUser?.accessToken);
    console.log(realmCurrentUser?.profile);
  }

  useEffect(() => {
    console.log(realmCurrentUser);

    // console.log(realmCurrentUser?.map((el: any) => console.log(el)));
  }, [realmCurrentUser]);
  // @ts-ignore
  // const auth = useAuth();
  // console.log(auth);
  // const { signIn, user } = useContext(AuthContext);
  // const app = useAuth();
  // const { signIn, user, curUser } = useAuth();
  // console.log(curUser);

  return (
    <>
      {realmCurrentUser === null ? (
        <Box style={styles.container}>
          <Text>THIS IS A TEST 7</Text>
          <Input
            style={styles.inputBox}
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <Input
            style={styles.inputBox}
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
          />
          <Button onPress={() => RealmLogin()} />
        </Box>
      ) : (
        /*         <Box>
          <Button onPress={() => RealmLogout()}>LOG OUT</Button>
          <Button onPress={() => RealmDetails()}>GET DEETS</Button>
        </Box> */
        <NavigationContainer>
          <NavigationNavigator />
        </NavigationContainer>
      )}
    </>
  );
}
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

/* 
## Logic for Login/Register/Persist Login system

const [currentUser, setCurrentUser] = useState(null);
React.useEffect(()=>{
      setCurrentUser(app.currentUser)
    }, [])


const {currentUser} = useAuth();
...
{currentUser == null ? (
            <LogInView />
          ) : (
            <TasksProvider projectId="My Project">
              <TasksView />
            </TasksProvider>
          )}



*/
