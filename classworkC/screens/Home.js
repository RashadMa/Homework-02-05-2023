import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CategoryList")}
      >
        <Text style={styles.text}>Category list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddData")}
      >
        <Text style={styles.text}>Add category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:20,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    elevation: 3,
    backgroundColor: "#1E232C",
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    color: "white",
  },
});

export default Home;
