import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  type: "add" | "remove";
  onPress: () => void;
}

export function Button({ type, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: type === "add" ? "#50ff59da" : "#f83f3fcc",
        },
      ]}
    >
      <Text style={styles.buttonTitle}>{type === "add" ? "+" : "-"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 35,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
