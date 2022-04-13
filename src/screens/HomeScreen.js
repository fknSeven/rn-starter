import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hello world</Text>
      <Button
        onPress={() => navigate("Components")}
        title="Go to components Demo"
      />
      <Button onPress={() => navigate("List")} title="Go to List Demo" />
      <Button onPress={() => navigate("Image")} title="Go to Image Demo" />
      <Button onPress={() => navigate("Counter")} title="Go to Counter Demo" />
      <Button onPress={() => navigate("Color")} title="Go to Color Demo" />
      <Button onPress={() => navigate("Square")} title="Go to Square Demo" />
      {/* <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
