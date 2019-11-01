import React, { Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Weather from "./Weather";

API_KEY = "0edfa86ab43026a80e611715a8f6cf89";

export default class App extends Component {
  state = { isLoading: true, temp: null, condition: "Clear" };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({ isLoading: false, temp, condition: weather[0].main });
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      let {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync({});

      this.getWeather(latitude, longitude);
    } catch {
      Alert.alert("Can't find you", "So sad");
    }
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    console.log(condition);
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

const styles = StyleSheet.create({});
