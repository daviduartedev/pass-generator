import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 1, width: "100%" }}
        source={require("./../assets/dark-wallpaper.jpeg")}
      />
    </View>
  );
}
