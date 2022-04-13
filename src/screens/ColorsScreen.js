import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        keyExtractor={(color) => color}
        data={colors}
        //element === {item: string, index: 0}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: item,
            }}
          />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${result.join(", ")})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
