import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  //   const friends = [
  //     { name: "Fiend #1", key: "1" },
  //     { name: "Fiend #2", key: "2" },
  //     { name: "Fiend #3", key: "3" },
  //     { name: "Fiend #4", key: "4" },
  //     { name: "Fiend #5", key: "5" },
  //     { name: "Fiend #6", key: "6" },
  //     { name: "Fiend #7", key: "7" },
  //     { name: "Fiend #8", key: "8" },
  //     { name: "Fiend #9", key: "9" },
  const friends = [
    { name: "Fiend #1", age: 20 },
    { name: "Fiend #2", age: 45 },
    { name: "Fiend #3", age: 32 },
    { name: "Fiend #4", age: 27 },
    { name: "Fiend #5", age: 53 },
    { name: "Fiend #6", age: 30 },
    { name: "Fiend #7", age: 18 },
    { name: "Fiend #8", age: 55 },
    { name: "Fiend #9", age: 28 },
  ];
  return (
    <FlatList
      //   horizontal={false}
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      //element === {item: {name: 'Friend #1'}, index: 0}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: { marginVertical: 5 },
});

export default ListScreen;
