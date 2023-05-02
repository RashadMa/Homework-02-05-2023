import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import CategoryList from "./screens/CategoryList";
import CategoryDetail from "./screens/CategoryDetail";
import AddData from "./screens/AddData";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
        <Stack.Screen name="AddData" component={AddData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
