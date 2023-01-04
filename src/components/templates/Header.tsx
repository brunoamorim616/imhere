import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.newEventName}
        placeholder="Novo Evento"
        placeholderTextColor="white"
        selectTextOnFocus
        blurOnSubmit
      />
      <TextInput
        style={styles.newEventDate}
        placeholder="Ex: Sexta-feira, dia 25 dde mar de 2022"
        placeholderTextColor="grey"
        selectTextOnFocus
        blurOnSubmit
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
  },
  newEventName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  newEventDate: {
    fontSize: 16,
    fontWeight: "400",
    color: "grey",
  },
});
