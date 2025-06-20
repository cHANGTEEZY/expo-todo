import { Button, StyleSheet, TextInput } from "react-native";

interface Props {
  colorScheme: "light" | "dark" | undefined;
  enteredText: string;
  goalInputHandler: (enteredText: string) => void;
  addGoalHandler: () => void;
}

const GoalInput = ({
  colorScheme,
  enteredText,
  goalInputHandler,
  addGoalHandler,
}: Props) => {
  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          {
            color: colorScheme === "dark" ? "white" : "black",
          },
        ]}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
