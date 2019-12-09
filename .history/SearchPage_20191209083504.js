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
  margin-bottom: 20;
  font-size: 68;
  text-align: "center";
  color: "#656565";
`;

const Container = styled.View`
  padding: 30;
  margin-top: 65;
  align-items: "center";
`;

const SearchPage = () => {
  return (
    <Container>
      <Description>Search for houses to buy!</Description>
      <Description>Search by place name or postcode</Description>
    </Container>
  );
};

export default SearchPage;
