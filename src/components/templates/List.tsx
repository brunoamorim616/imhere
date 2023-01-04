import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Participant, ParticipantsList } from "../../@types/Participants";
import { ListItem } from "./../organisms/ListItem";

interface ListProps {
  participants: ParticipantsList;
  setParticipants: (participants: ParticipantsList) => void;
}

interface RenderItemProps {
  item: Participant;
}

type KeyExtractorProps = Omit<Participant, "name">;

export function List({ participants, setParticipants }: ListProps) {
  function removeParticipant(participantID: string) {
    const participantsList = participants;
    const newList = participantsList.filter(
      (participant) => participant.id !== participantID
    );
    setParticipants(newList);
  }

  const renderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <ListItem participant={item} onPress={removeParticipant} />
    ),
    [removeParticipant]
  );

  function keyExtractor(item: KeyExtractorProps) {
    return item.id;
  }

  function itemSeparatorComponent() {
    return <View style={{ height: 12 }} />;
  }

  return (
    <FlatList
      style={styles.container}
      data={participants}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparatorComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
  },
});
