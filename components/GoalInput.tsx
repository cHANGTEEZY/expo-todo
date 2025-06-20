import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

interface Props {
  visible: boolean;
  closeModal: () => void;
  colorScheme: "light" | "dark" | undefined;
  enteredText: string;
  goalInputHandler: (enteredText: string) => void;
  addGoalHandler: () => void;
}

const GoalInput = ({
  visible,
  colorScheme,
  closeModal,
  enteredText,
  goalInputHandler,
  addGoalHandler,
}: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color={"red"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    gap: "20",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 20,
  },

  buttonContainer: {
    gap: 10,
    flexDirection: "row",
  },

  button: {
    width: "30%",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
});
