import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  item: {
    text: string;
    key: string;
  };

  removeItem: (key: string) => void;
}

const GoalItem = ({ item, removeItem }: Props) => {
  return (
    <View key={item.key} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => removeItem(item.key)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    fontSize: 20,
    backgroundColor: "#530acc",
    margin: 8,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    padding: 20,
    color: "white",
  },
});
