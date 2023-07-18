import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";

const App = () => {
  const routing = useRoute(null);

  const [fontsLoaded] = useFonts({
    RobotoBold: require("./fonts/Roboto-Bold.ttf"), // Завантаження шрифту Roboto-Bold
    RobotoRegular: require("./fonts/Roboto-Regular.ttf"), // Завантаження шрифту Roboto-Regular
    RobotoMedium: require("./fonts/Roboto-Medium.ttf"), // Завантаження шрифту Roboto-Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
