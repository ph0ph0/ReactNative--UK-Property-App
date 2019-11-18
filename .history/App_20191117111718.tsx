/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, FunctionComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigatonNativeContainer} from '@react-navigation/native';

import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 18;
  text-align: center;
  color: #656565;
  margin-top: 65;
`;

type PageOneProps = {};
const PageOne: FunctionComponent<PageOneProps> = () => {
  return (
    <NavigatonNativeContainer>
      <Title>Search for houses to buy!</Title>
    </NavigatonNativeContainer>
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <PageOne />
    </SafeAreaView>
  );
};

export default App;
