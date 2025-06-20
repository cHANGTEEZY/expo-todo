import { StyleSheet, Text, View } from "react-native";

interface Props {
  item: {
    text: string;
    key: string;
  };

  removeItem: (key: string) => void;
}

const GoalItem = ({ item, removeItem }: Props) => {
  return (
    <View key={item.key} style={styles.goalItems}>
      <Text style={styles.goalText}>{item.text}</Text>
      <Text style={styles.goalCross} onPress={() => removeItem(item.key)}>
        X
      </Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    backgroundColor: "#530acc",
    margin: 8,
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
  },

  goalText: {
    color: "white",
  },

  goalCross: {
    color: "white",
    position: "absolute",
    right: 20,
    top: 10,
  },
});
