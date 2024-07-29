import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Feather from "@expo/vector-icons";

const IconText = () => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;

  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default IconText;
