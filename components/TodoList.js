import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <View style={styles.todoList}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoList: {
    marginVertical: 50,
    height: 450,
  },
  list: {
    justifyContent: "space-between",
    marginBottom: 50,
  },
});
