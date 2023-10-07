import { Text } from "react-native";

export default function DetailsScreen({ route }) {
  console.log(route.params);

  return <Text>Hello world</Text>;
}
