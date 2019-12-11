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

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: "uk",
    pretty: "1",
    encoding: "json",
    listing_type: "buy",
    action: "search_listings",
    page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + "=" + encodeURIComponent(data[key]))
    .join("&");

  return "https://api.nestoria.co.uk/api?" + querystring;
}

const SearchPage = () => {
  const [searchString, setSearchString] = useState("london");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateSearchString = value => {
    setSearchString(value);
  };

  const executeQuery = query => {
    setIsLoading(true);
    fetch(query)
      .then(response => response.json())
      .then(json => handleResponse(json.response))
      .catch(error => {
        setIsLoading(false);
        setMessage("Error: " + error);
      });
  };

  const handleResponse = response => {
    setIsLoading(false);
    setMessage("");
    if (response.application_response_code.substr(0, 1) === "1") {
      navigation.navigate("SearchResults", {
        listings: response.listings,
      });
      setMessage("Properties found: " + response.listings.length);
    } else {
      setMessage("Location not recognised");
    }
  };

  const onSearchPressed = () => {
    const query = urlForQueryAndPage("place_name", searchString, 1);
    executeQuery(query);
  };

  return (
    <Container>
      <Description>Search for houses to buy! {searchString}</Description>
      <Description>Search by place name or postcode</Description>
      <FlowRightLayout>
        <Search
          placeholder={"Search via placename or postcode"}
          value={searchString}
          onChange={event => updateSearchString(event.nativeEvent.text)}
        />
        <Button onPress={onSearchPressed} title="Go" />
      </FlowRightLayout>
      <HouseGraphic source={require("./Resources/house.png")} />
      {isLoading ? <ActivityIndicator size="large" /> : null}
      <Description>{message}</Description>
    </Container>
  );
};

export default SearchPage;
