import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

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
  closeModal,
  enteredText,
  goalInputHandler,
  addGoalHandler,
}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color={"violet"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color={"#f31282"} />
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
    padding: 20,
    backgroundColor: "#311b6b",
  },

  buttonContainer: {
    gap: 10,
    flexDirection: "row",
  },

  button: {
    width: "30%",
  },

  image: {
    height: 100,
    width: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 8,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 15,
  },
});
