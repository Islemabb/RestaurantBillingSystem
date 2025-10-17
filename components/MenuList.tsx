import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getMenus, MenuItem } from "../utils/storage";

interface Props {
  onAdd: (item: MenuItem) => void;
}

export default function MenuList({ onAdd }: Props) {
  const [menus, setMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    (async () => {
      const loaded = await getMenus();
      setMenus(loaded);
    })();
  }, []);

  return (
    <FlatList
      data={menus}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => onAdd(item)}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price} DT</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  card: {
    flex: 1,
    alignItems: "center",
    margin: 6,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  image: { width: 70, height: 70, borderRadius: 10, marginBottom: 6 },
  name: { fontWeight: "600", fontSize: 15, color: "#222" },
  price: { color: "#777", marginTop: 2 },
});
