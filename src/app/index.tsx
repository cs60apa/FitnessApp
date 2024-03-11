import { Link } from "expo-router";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import FoodListItem from "../components/FoodListItem";

const foodListItems = [
  {
    food: { label: "Pizza", nutrients: { ENERC_KCAL: 100 }, brand: "Dominos" },
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.logged}>Calories</Text>
      <Text>1117 - 360 = 2489</Text>
      </View>

      <View style={styles.subcontainer}>
        <Text style={styles.logged}>Today's logged food</Text>
        <Link href="/search" asChild>
          <Button title="ADD FOOD" />
        </Link>
      </View>
      <FlatList
        data={foodListItems}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    gap: 10,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logged: {
    fontSize: 18,
    color: "dimgray",
    flex: 1,
    fontWeight: "bold",
  },
});
