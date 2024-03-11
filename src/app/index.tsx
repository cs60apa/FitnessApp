import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

const foodListItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Apple", cal: 50, brand: "Generic" },
  { label: "Orange", cal: 40, brand: "Gastric" },
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const {data, loading, error } = useQuery(query, { variables: { ingr: "Pizza" } });

  const performSearch = () => {
    console.log("Search for: ", search);

    setSearch("");
  };

  if (loading){
    return <ActivityIndicator />
  }

  if (error){
    return <Text>Failed to search..</Text>
  }

  console.log(JSON.stringify(data, null, 2));

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for food"
        style={styles.input}
      />
      {search && <Button title="Search" onPress={performSearch} />}

      <FlatList
        data={foodListItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
  },
});
