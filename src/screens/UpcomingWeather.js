import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import ListItem from "../components/ListItem";
import React from "react";

const DATA = [
  {
    dt_txt: "2024-01-20 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2024-01-20 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2024-01-20 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />;

    const { container, image } = styles;
  };
  return (
    <SafeAreaView style={container}>
      <Text>UpcomingWeather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red",
  },
});

export default UpcomingWeather;
