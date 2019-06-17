/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainCategory from "./src/Containers/MainCategory";

const RootNavigator = createStackNavigator(
  {
    MainCategory: { screen: MainCategory }
  },
  {
    initialRouteName: "MainCategory",
    headerMode: "none"
  }
);

const AppNavigator = createAppContainer(RootNavigator);
export default AppNavigator;
