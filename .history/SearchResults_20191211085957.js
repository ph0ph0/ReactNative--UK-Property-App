import React, { Component } from "react";
import styled from "styled-components";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from "react-native";

const Container = styled.View`
  padding-top: 30;
  padding-bottom: 30;
  padding-left: 30;
  padding-right: 30;
  margin-top: 65;
  align-items: center;
  background-color: orange;
`;

const SRView = styled.View`
  background-color: blue;
`;

const SearchResults = ({ ...props }) => {
  const { listings } = props;

  const keyExtractor = (item, index) => index;

  const SearchResult = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="#dddddd">
        <SRView>
          <Text>{item.title}</Text>
        </SRView>
      </TouchableHighlight>
    );
  };

  return (
    <Container>
      <Text>{listings}</Text>
      <FlatList
        data={listings}
        keyExtractor={keyExtractor}
        renderItem={SearchResult}
      />
    </Container>
  );
};

export default SearchResults;
