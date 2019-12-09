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

import styled from "styled-components";

const Description = styled.Text`
  margin-bottom: 20;
  font-size: 18;
  text-align: center;
  color: #656565;
`;

const Container = styled.View`
  padding-bottom: 300;
  margin-top: 65;
  align-items: center;
`;

const FlowRightLayout = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

const Search = styled.TextInput`
  height: 36;
  /* padding: 4; */
  margin-right: 5;
  flex-grow: 1;
  font-size: 18;
  border-width: 1;
  border-color: #48bbec;
  border-radius: 8;
  color: #48bbec;
`;

const SearchPage = () => {
  return (
    <Container>
      <Description>Search for houses to buy!</Description>
      <Description>Search by place name or postcode</Description>
      <FlowRightLayout>
        <Search placeholder={"Search via placename or postcode"} />
        <Button onPress={() => {}} title="Go" />
      </FlowRightLayout>
    </Container>
  );
};

export default SearchPage;
