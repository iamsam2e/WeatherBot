import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import React, { Component } from "react";
import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    cityName,
    cityText,
    imageLayout,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        styles={imageLayout}
        source={require("../../assets/citybackground.jpg")}
      ></ImageBackground>
      <Text style={[cityName, cityText]}>City Name</Text>
      <Text style={[countryName, cityText]}>Country</Text>
      <View style={[populationWrapper, rowLayout]}>
        <IconText
          iconname={"user"}
          iconColor={"red"}
          bodyText={"8000"}
          bodyTextStyles={populationText}
        />
      </View>
      <View style={[riseSetWrapper, rowLayout]}>
        <IconText
          iconname={"sunrise"}
          iconColor={"white"}
          bodyText={"10:46:58AM"}
          bodyTextStyles={riseSetText}
        />
        <IconText
          iconname={"sunset"}
          iconColor={"white"}
          bodyText={"17:28:15PM"}
          bodyTextStyles={riseSetText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
