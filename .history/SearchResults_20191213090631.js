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

const Thumbnail = styled.Image`
  width: 80;
  height: 80;
  margin-right: 10;
`;

const TextContainer = styled.View`
  flex: 1;
`;

const Separator = styled.View`
  height: 1;
  background-color: #dddddd;
`;

const Price = styled.Text`
  font-size: 25;
  color: #48bbec;
`;
const Title = styled.Text`
  font-size: 20;
  color: #656565;
`;

const RowContainer = styled.View`
  flex-direction: row;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
`;
const SearchResult = ({ listing, onPressItem, index }) => {
  const onPress = () => {
    onPressItem(index);
  };

  return (
    <TouchableHighlight onPress={onPress} underlayColor={"green"}>
      <View>
        <RowContainer>
          <Thumbnail source={{ uri: listing.img_url }} />
          <TextContainer>
            <Price>{listing.price}</Price>
            <Title numberOfLines={1}>{listing.title}</Title>
          </TextContainer>
        </RowContainer>
        <Separator />
      </View>
    </TouchableHighlight>
  );
};

const SearchResults = ({ navigation, route }) => {
  const { listings } = route.params;

  listings.forEach(listing => {
    console.log(listing.img_url);
  });

  const keyExtractor = (item, index) => `list-item-${index}`;

  const onPressItem = index => {
    console.log(`Pressed row: ${index}`);
  };

  return (
    <FlatList
      data={listings}
      keyExtractor={keyExtractor}
      renderItem={({ item, index }) => {
        return (
          <SearchResult
            listing={item}
            index={index}
            onPressItem={onPressItem}
          />
        );
      }}
    />
  );
};

export default SearchResults;
