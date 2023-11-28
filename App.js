import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import TodoList from "./components/TodoList.js";
import CreateTodo from "./components/CreateTodo.js";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        const todoData = data.slice(0, 10);
        setTodos(todoData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  //CRUD
  //Create
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  //Delete
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
