import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryDetail = ({ route }) => {
  const [detail, setDetail] = useState({});
  const { id } = route.params;

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/categories/${id}`)
      .then((response) => setDetail(response.data));
  }, []);

  return (
    <View style={styles.mainHolder}>
      <View style={styles.midSide}>
        <Text style={styles.id}>ID: {detail.id}</Text>
        <Text style={styles.name}>Name: {detail.name}</Text>
        <Text style={styles.desc}>Description: {detail.description}</Text>
      </View>
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  mainHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 12,
    position: "relative",
    margin: 10,
  },
  name: {
    fontWeight: "400",
    fontSize: 17,
    color: "#0A0A0A",
    marginBottom: 10,
  },
  midSide: {
    marginLeft: 20,
  },
  desc: {
    fontWeight: "400",
    fontSize: 15,
    color: "#6A707C",
  },
  id: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0A0A0A",
    marginBottom: 10,
  },
});
