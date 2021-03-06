import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //don't do this!!!
          //   counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //   counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
