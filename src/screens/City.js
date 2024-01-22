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
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        styles={styles.imageLayout}
        source={require("../../assets/citybackground.jpg")}
      ></ImageBackground>
      <Text style={[styles.cityName, styles.cityText]}>City Name</Text>
      <Text style={[styles.countryName, styles.cityText]}>Country</Text>
      <View style={styles.populationWrapper}>
        <IconText
          iconname={"user"}
          iconColor={"red"}
          bodyText={"8000"}
          bodyTextStyles={styles.populationText}
        />
      </View>
      <View style={styles.riseSetWrapper}>
        <IconText
          iconname={"sunrise"}
          iconColor={"white"}
          bodyText={"10:46:58AM"}
          bodyTextStyles={styles.riseSetText}
        />
        <IconText
          iconname={"sunset"}
          iconColor={"white"}
          bodyText={"17:28:15PM"}
          bodyTextStyles={styles.riseSetText}
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
    flexDirection: "row",
    alignItems: "center",
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
    flexDirection: "row",
    alignItems: "center",
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
