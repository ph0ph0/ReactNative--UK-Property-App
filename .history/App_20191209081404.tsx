/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, FunctionComponent } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";

import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";

import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 18;
  text-align: center;
  color: #656565;
  margin-top: 65;
`;

const Container = styled.View`
  flex: 1;
`;

const SearchPage = () => {
  return (
    <Container>
      <Title>Search for houses to buy!</Title>
    </Container>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Search Page">
        <Stack.Screen name="Home" component={SearchPage} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
