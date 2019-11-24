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
import { createTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";
import "react-native-gesture-handler";

import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 18;
  text-align: center;
  color: #656565;
  margin-top: 65;
`;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Title>Home Screen Cunt Face</Title>
      <Button
        title="Go to Detail Screen"
        onPress={() =>
          navigation.navigate("Detail", {
            itemId: 21,
            itemContent: "This is some content for the detail screen",
          })
        }
      />
    </View>
  );
}

const DetailScreen = ({ navigation, route }) => {
  const { itemId } = route.params;
  const { itemContent } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Title>Detail Screen U bellend</Title>
      <Text>{itemId}</Text>
      <Text>{itemContent}</Text>
      <Button title="Force go back" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const Tab = createTabNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator>
        <Tab.Screen name="StackNav" component={StackNav} />
        <Tab.Screen name="StackNav2" component={StackNav} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
