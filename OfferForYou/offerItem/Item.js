import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export const Item = ({
  item: { title = "", image = "", id = "", time = "" } = {},
  navigation,
}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate("OfferDetail", { id })}
  >
    <Image
      style={styles.image}
      source={{
        uri: image,
      }}
    />
    <Text style={[styles.title, styles.color]}>{title}</Text>
    <View style={styles.time}>
      <Text style={[styles.font, styles.color]}>{time}</Text>
      <Text style={[styles.font, styles.color]}>{"mins"}</Text>
    </View>
  </TouchableOpacity>
);
