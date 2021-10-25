import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Platform,
} from "react-native";
import { StatusBar, Center, NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { AuthProvider } from "./_globals/providers/AuthProvider";
// import { getRealmApp } from "./_globals/providers/getRealmApp";

// const app = getRealmApp();

export function StatusBarContainer(props: any) {
  const height = Platform.OS === "ios" ? 20 : -5;
  const { backgroundColor } = props;

  return (
    <View style={{ height, backgroundColor }}>
      <StatusBar {...props} />
    </View>
  );
}

export default function App() {
  /*   const [email, setEmail] = React.useState("");
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
  } */
  return (
    <SafeAreaProvider>
      <StatusBarContainer backgroundColor="#6b6a6e" barStyle="light-content" />
      <SafeAreaView>
        <View style={{ backgroundColor: "lightgray", height: "100%" }}>
          <Text>te2st</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    /*     <AuthProvider>
      <View style={styles.container}>
        <Text>THIS IS A TEST 7</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="login" onPress={() => RealmLogin()} />
      </View>
    </AuthProvider> */
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
