import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const INCREMENT = 15;

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change === +15, -15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", INCREMENT)}
        onDecrease={() => setColor("red", -1 * INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", INCREMENT)}
        onDecrease={() => setColor("green", -1 * INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", INCREMENT)}
        onDecrease={() => setColor("blue", -1 * INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
