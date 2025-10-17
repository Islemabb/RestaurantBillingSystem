import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  total: number;
}

export default function TotalBar({ total }: Props) {
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>Total: {total.toFixed(2)} DT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#222",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
