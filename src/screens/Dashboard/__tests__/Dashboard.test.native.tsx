import { shallow } from "enzyme";
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Dashboard from "..";

it("renders <Dashboard /> without crashing", () => {
  shallow(<Dashboard />);
});
