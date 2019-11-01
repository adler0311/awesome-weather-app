import React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.imageContainer}>
        <Image opacity={0.6} source={require("./assets/cloud.jpg")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
        <Text style={styles.text}>Getting the weather</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: { fontSize: 30, color: "white" },
  imageContainer: { flex: 3, justifyContent: "center" },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 100
  },
  loadingText: { color: "white", marginBottom: 10, fontSize: 20 }
});
