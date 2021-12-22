import React from "react";
import { Text, View, Image, FlatList, Button } from "react-native";
import { DATA } from "../../constants/constants";
import styles from "./styles";

export default ({ navigation, route }) => {
  const data = DATA.find((d) => d.id === route.params.id);
  const { image, title, servings, ingredients, description } = data || {};
  const Item = ({ item: { name, quantity } }) => {
    return (
      <View style={styles.ingredients}>
        <Text style={styles.color}>{name}</Text>
        <Text style={styles.color}>{quantity}</Text>
      </View>
    );
  };
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.title}>
        <Text style={[styles.color, styles.font]}>{title}</Text>
        <View style={styles.imageContainer}>
          <Text style={[styles.color, styles.font]}>{`Kogus`}</Text>
          <Text>{`${servings} inimesele`}</Text>
        </View>
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={styles.header}>Vajalikud koostisosad</Text>
        )}
        keyExtractor={(item) => item.name}
        data={ingredients}
        renderItem={Item}
      ></FlatList>
      <View style={(styles.imageContainer, styles.test)}>
        <Text style={[styles.color, styles.font]}>{`Valmistamine`}</Text>
        <Text style={styles.color}>{description}</Text>
      </View>
      <Button
        title={"Tagasi nimekorja"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
