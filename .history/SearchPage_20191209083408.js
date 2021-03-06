import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";

const Description = styled.Text`
  margin-bottom: 20,
    font-size: 18,
    text-align: 'center',
    color: '#656565'
`;

const Container = styled.View`
  flex: 1;
`;

const SearchPage = () => {
  return (
    <Container>
      <Title>Search for houses to buy!</Title>
      <Title>Search by place name or postcode</Title>
    </Container>
  );
};

export default SearchPage;
