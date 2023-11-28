import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export default function TodoItem({ todo, deleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  useEffect(() => {
    setIsCompleted(todo.completed);
  }, [todo.completed]);
  const handlePress = () => {
    setIsCompleted(!isCompleted);
    console.log("Updated completed status:", !isCompleted);
    if (isCompleted) {
      Alert.alert("Not Completed!", "Mark as incompleted!");
    } else {
      Alert.alert("Completed", "Mark as completed!");
    }
  };
  const handleDelete = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => deleteTodo(todo.id),
        style: "destructive",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text
          style={isCompleted ? styles.txtCompleted : styles.txtNotCompleted}
        >
          {todo.title}
        </Text>
      </Pressable>

      <Pressable onPress={handleDelete}>
        <View>
          <Icon name="delete" size={30} color="blue" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: 15,
  },

  txtNotCompleted: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "green",
    paddingHorizontal: 6,
    paddingVertical: 15,
    width: 300,
  },
  txtCompleted: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "lightgreen",
    paddingHorizontal: 6,
    paddingVertical: 15,
    width: 300,
  },
});
