import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from "react-native";

const SearchResults = ({ ...props }) => {
  const { listings } = props;

  const keyExtractor = (item, index) => index;

  const SearchResult = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="#dddddd">
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <Text>{listings}</Text>
      <FlatList
        data={listings}
        keyExtractor={keyExtractor}
        renderItem={SearchResult}
      />
    </View>
  );
};

export default SearchResults;
