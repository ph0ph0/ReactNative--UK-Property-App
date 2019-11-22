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
} from "react-native";

import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 18;
  text-align: center;
  color: #656565;
  margin-top: 65;
`;

type PageOneProps = {};
const PageOne: FunctionComponent<PageOneProps> = () => {
  return <Title>Search for houses to buy!</Title>;
};

const Stack = createStackNavigator();

// <Stack.Navigator>
//           <Stack.Screen name="Home" component={PageOne} />
//         </Stack.Navigator>

const App = () => {
  return (
    <SafeAreaView>
      <NavigationNativeContainer>
        <PageOne />
      </NavigationNativeContainer>
    </SafeAreaView>
  );
};

export default App;
