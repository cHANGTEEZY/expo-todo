import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import React, { useState } from "react";
import { FlatList, StyleSheet, useColorScheme, View } from "react-native";

const App = () => {
  const [enteredText, setEnteredText] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<
    {
      text: string;
      key: string;
    }[]
  >([]);

  const colorScheme = useColorScheme() as "light" | "dark" | undefined;

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
        <GoalInput
          colorScheme={colorScheme}
          enteredText={enteredText}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <GoalItem item={item} removeItem={removeGoalHandler} />
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
});
