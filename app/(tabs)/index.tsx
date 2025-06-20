import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

const App = () => {
  const [enteredText, setEnteredText] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<
    {
      text: string;
      key: string;
    }[]
  >([]);

  const colorScheme = useColorScheme();

  function goalInputHandler(textInput: string) {
    setEnteredText(textInput);
  }

  function addGoalHandler() {
    if (enteredText.trim()) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredText, key: Math.random().toString() },
      ]);
      setEnteredText("");
    }
  }

  function removeGoalHandler(key: string) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== key)
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            {
              color: colorScheme === "dark" ? "white" : "dark",
            },
          ]}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.goalItems}>
              <Text style={styles.goalText}>{item.text}</Text>
              <Text
                style={styles.goalCross}
                onPress={() => removeGoalHandler(item.key)}
              >
                X
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 5,
    marginBottom: 20,
  },

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
