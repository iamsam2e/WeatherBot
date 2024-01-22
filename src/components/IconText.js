import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Feather from "@expo/vector-icons";

const IconText = () => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
