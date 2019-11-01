import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "rainy day",
    subtitle: "don't go outside! ☹️"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#c0c0aa", "#1cefff"],
    title: "snowy day",
    subtitle: "go outside! 😄"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"],
    title: "Haze",
    subtitle: "don't go outside! 🙁"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"],
    title: "foggy day",
    subtitle: "don't go outside! 🙁"
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "clear day",
    subtitle: "go outside! 😄"
  },
  Cloud: {
    iconName: "cloud",
    gradient: ["#73C8A9", "#373B44"],
    title: "cloud day",
    subtitle: "go outside! 🙂"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.titleText}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitleText}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ])
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 30,
    color: "white"
  },
  textContainer: { alignItems: "flex-start", marginLeft: 50 },
  titleText: {
    fontSize: 40,
    marginBottom: 10,
    color: "white"
  },
  subtitleText: {
    fontSize: 24,
    color: "white"
  }
});
