import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../actions/getCategories";

const CategoryList = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .then(setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const categoryDetail = (id) => {
    navigation.navigate("CategoryDetail", { id: id });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => categoryDetail(item.id)}>
        <View style={styles.mainHolder}>
          <View style={styles.midSide}>
            <Text style={styles.name}>Name: {item.name}</Text>
            <Text style={styles.desc}>Description: {item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return <View>{<FlatList data={categories} renderItem={renderItem} />}</View>;
};

export default CategoryList;

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
});
