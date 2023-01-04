import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Participant } from "../../@types/Participants";
import { Button } from "./../atoms/Button";

interface FormProps {
  setNewParticipant: (participant: Participant) => void;
}

export function Form({ setNewParticipant }: FormProps) {
  const [participantName, setParticipantName] = useState<string>("");

  function createParticipant(participantName: string) {
    let participant: Participant;
    let id = Math.random().toString(36);
    participant = { id, name: participantName };
    return participant;
  }

  function addParticipantToTheList() {
    if (participantName.trim() === "")
      return Alert.alert("Nome do participante obrigatório.");
    const participant = createParticipant(participantName);
    setNewParticipant(participant);
    cleanTextField();
  }

  function cleanTextField() {
    setParticipantName("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.newParticipant}
        placeholder="Nome do participante"
        placeholderTextColor="grey"
        onChangeText={setParticipantName}
        value={participantName}
      />
      <Button type="add" onPress={addParticipantToTheList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 34,
    justifyContent: "center",
  },
  newParticipant: {
    flex: 1,
    marginRight: 13,
    borderRadius: 5,
    backgroundColor: "#303030",
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
});
