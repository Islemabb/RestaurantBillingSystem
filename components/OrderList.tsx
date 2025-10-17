import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "../utils/storage";

interface OrderItem extends MenuItem {
  qty: number;
}

interface Props {
  orders: OrderItem[];
  onChangeQty: (id: number, delta: number) => void;
}

export default function OrderList({ orders, onChangeQty }: Props) {
  return (
    <View style={styles.container}>
      {orders.map((item) => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => onChangeQty(item.id, -1)} style={styles.btn}><Text>-</Text></TouchableOpacity>
            <Text style={styles.qty}>{item.qty}</Text>
            <TouchableOpacity onPress={() => onChangeQty(item.id, 1)} style={styles.btn}><Text>+</Text></TouchableOpacity>
          </View>
          <Text style={styles.subtotal}>{item.price * item.qty} DT</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  name: { flex: 1, fontWeight: "600", fontSize: 15 },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  btn: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  qty: { marginHorizontal: 5, fontWeight: "bold" },
  subtotal: {
    width: 70,
    textAlign: "right",
    fontWeight: "600",
    color: "#444",
  },
});