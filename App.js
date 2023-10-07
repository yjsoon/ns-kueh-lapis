import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    { red: 128, green: 0, blue: 0, id: 0 },
    { red: 0, green: 100, blue: 0, id: 1 },
    { red: 0, green: 0, blue: 255, id: 2 }
  ]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
