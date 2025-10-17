import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import MenuList from "../../components/MenuList";
import OrderList from "../../components/OrderList";
import TotalBar from "../../components/TotalBar";
import { initMenus, MenuItem } from "../../utils/storage";



interface OrderItem extends MenuItem {
  qty: number;
}

export default function App() {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    initMenus();
  }, []);

  const handleAdd = (menu: MenuItem) => {
    setOrders((prev) => {
      const existing = prev.find((o) => o.id === menu.id);
      if (existing) {
        return prev.map((o) => (o.id === menu.id ? { ...o, qty: o.qty + 1 } : o));
      } else {
        return [...prev, { ...menu, qty: 1 }];
      }
    });
  };

  const handleQtyChange = (id: number, delta: number) => {
    setOrders((prev) =>
      prev
        .map((o) =>
          o.id === id ? { ...o, qty: Math.max(1, o.qty + delta) } : o
        )
        .filter((o) => o.qty > 0)
    );
  };

  const total = orders.reduce((sum, o) => sum + o.price * o.qty, 0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MenuList onAdd={handleAdd} />
        <OrderList orders={orders} onChangeQty={handleQtyChange} />
      </ScrollView>
      <TotalBar total={total} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    paddingBottom: 80,
  },
  section: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  divider: {
    height: 2,
    backgroundColor: "#ddd",
    width: "90%",
    alignSelf: "center",
    borderRadius: 2,
    marginVertical: 5,
  },
});
