import React, { Component, useState } from "react";
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
  padding-top: 30;
  padding-bottom: 30;
  padding-left: 30;
  padding-right: 30;
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
  padding-top: 4;
  padding-bottom: 4;
  padding-left: 4;
  padding-right: 4;
  margin-right: 5;
  flex-grow: 1;
  font-size: 18;
  border-width: 1;
  border-color: #48bbec;
  border-radius: 8;
  color: #48bbec;
`;

const HouseGraphic = styled.Image`
  width: 217;
  height: 138;
`;

const SearchPage = () => {
  const [searchString, setSearchString] = useState("london");

  const updateSearchString = value => {
    window.log(`searchString changed: ${value}`);
    setSearchString(value);
  };

  return (
    <Container>
      <Description>Search for houses to buy! {searchString}</Description>
      <Description>Search by place name or postcode</Description>
      <FlowRightLayout>
        <Search
          placeholder={"Search via placename or postcode"}
          value={searchString}
          onChange={event => updateSearchString(event.target.value)}
        />
        <Button onPress={() => {}} title="Go" />
      </FlowRightLayout>
      <HouseGraphic source={require("./Resources/house.png")} />
    </Container>
  );
};

export default SearchPage;
