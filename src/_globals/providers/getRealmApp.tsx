import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Realm from "realm";

let app: any;

export default function getRealmApp() {
  if (app === undefined) {
    const appId = "application-0-onlxj"; // Set Realm app ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
    };
    app = new Realm.App(appConfig);
    console.log(app);
  }
  return app;
}
