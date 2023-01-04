import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../atoms/Button";

interface ListItemProps {
  participant: { id: string; name: string };
  onPress: (participantID: string) => void;
}

export function ListItem({ participant, onPress }: ListItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.nameDisplayContainer}>
        <Text style={styles.nameDisplay}>{participant.name}</Text>
      </View>
      <Button type="remove" onPress={() => onPress(participant.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  nameDisplayContainer: {
    flex: 1,
    marginRight: 13,
    borderRadius: 5,
    backgroundColor: "#303030",
    justifyContent: "center",
    padding: 8,
  },
  nameDisplay: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
