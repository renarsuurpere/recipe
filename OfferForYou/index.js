import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { DATA } from "../constants/constants";
import { Item } from "./offerItem/Item";
import styles from "./styles";

export default function Offers({ navigation }) {
  const renderItem = ({ item }) => <Item item={item} navigation={navigation} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
