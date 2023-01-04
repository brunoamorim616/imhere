import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Participant, ParticipantsList } from "../@types/Participants";
import { Form } from "./../components/templates/Form";
import { Header } from "./../components/templates/Header";
import { List } from "./../components/templates/List";

export function Home({}) {
  const [participants, setParticipants] = useState<ParticipantsList>([]);

  function handleSetNewParticipant(participant: Participant) {
    setParticipants((previousState) => [...previousState, participant]);
  }

  function handleSetParticipants(participants: ParticipantsList) {
    setParticipants(participants);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form setNewParticipant={handleSetNewParticipant} />
      <List
        participants={participants}
        setParticipants={handleSetParticipants}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
    paddingVertical: 21,
    backgroundColor: "#111111",
  },
});
