import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  //   const greeting = ["Hi there!", "bitch"];
  //   const greeting2 = <Text style={{ fontSize: 20 }}>{greeting.join(" ")}</Text>;
  //   return (
  //     <View>
  //       <Text style={styles.textStyle}>This is the componenst screen</Text>
  //       {greeting2}
  //     </View>
  //   );
  const myName = "Steve";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 45 },
  subHeaderStyle: { fontSize: 20 },
});

export default ComponentsScreen;
