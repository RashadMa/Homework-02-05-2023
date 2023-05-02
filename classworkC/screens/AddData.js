import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const AddData = ({ navigation }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      description: desc,
    },
  });
  const onSubmit = (values) => {
    axios
      .post("https://northwind.vercel.app/api/categories", values)
      .then((res) => console.log(res.data))
      .then(navigation.navigate("Home"));
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />

      {/* <Button title="Submit" /> */}
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddData;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F7F8F9",
    borderColor: "#E8ECF4",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
  },
  container: {
    margin: 20,
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
    color: "#fcfcfc",
  },
});
