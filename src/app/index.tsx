// import { Link } from "expo-router";
// import {
//   View,
//   Text,
//   FlatList,
//   Button,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import { gql, useQuery } from "@apollo/client";
// import dayjs from "dayjs";
// import FoodLogListItem from "../components/FoodLogListItem";

// const query = gql`
//   query MyQuery($date: Date!, $user_id: String!) {
//     foodLogsForDate(date: $date, user_id: $user_id) {
//       created_at
//       food_id
//       user_id
//       label
//       kcal
//       id
//     }
//   }
// `;

// export default function HomeScreen() {
//   const user_id = "Mark";
//   const { data, loading, error } = useQuery(query, {
//     variables: { date: dayjs().format("YYYY-MM-DD"), user_id },
//   });

//   if (loading) {
//     return <ActivityIndicator />;
//   }

//   if (error) {
//     return <Text>Failed to fetch data..</Text>;
//   }

//   console.log(data);

// return (
//   <View style={styles.container}>
//     <View style={styles.subcontainer}>
//       <Text style={styles.logged}>Calories</Text>
//       <Text>1117 - 360 = 2489</Text>
//     </View>

//     <View style={styles.subcontainer}>
//       <Text style={styles.logged}>Today's logged food</Text>
//       <Link href="/search" asChild>
//         <Button title="ADD FOOD" />
//       </Link>
//     </View>
//     <FlatList
//       data={data.foodLogsForDate}
//       contentContainerStyle={{ gap: 5 }}
//       renderItem={({ item }) => <FoodLogListItem item={item} />}
//     />
//   </View>
// );

import { Link } from "expo-router";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import FoodLogListItem from "../components/FoodLogListItem";

const query = gql`
  query foodLogsForDate($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      food_id
      user_id
      created_at
      label
      kcal
      id
    }
  }
`;

export default function HomeScreen() {
  const user_id = "Mark";
  const { data, loading, error } = useQuery(query, {
    variables: {
      date: dayjs().format("YYYY-MM-DD"),
      user_id,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.logged}>Calories</Text>
        <Text> 1770 - 360 = 1692</Text>
      </View>

      <View style={styles.subcontainer}>
        <Text style={styles.logged}>Today's food</Text>
        <Link href="/search" asChild>
          <Button title="ADD FOOD" />
        </Link>
      </View>
      <FlatList
        data={data.foodLogsForDate}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
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
