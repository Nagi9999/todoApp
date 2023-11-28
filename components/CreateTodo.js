import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";

export default function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      //to check if the input is empty and generate an alert
      Alert.alert("Please enter a task before adding it! ");
      return;
    }
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    //console.log(newTodo);
    addTodo(newTodo);
    setTitle("");
    setIsModalVisible(false); //close it after submition
    Alert.alert("added successfully!"); //to show the task was added
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.createStyle} >
        <Button
          title="ADD NEW TODO"
          onPress={() => setIsModalVisible(true)}
          color={"white"}          
        />
      </View>

      <Modal visible={isModalVisible} animationType="slide">
        <SafeAreaView style={styles.modalStyle}>
          <TextInput
            style={[styles.input, isFocused && styles.focusedInput]}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter you task"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isFocused && title.trim() === "" && (
            <Text style={styles.requiredText}>Required</Text>
          )}
          <View style={styles.btnModal}>
            <Button title="Add Todo" onPress={handleSubmit} color="blue" />
            <Button
              title="Cancel"
              onPress={() => setIsModalVisible(false)}
              color="red"
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  createStyle: {
    padding: 6,
    backgroundColor: "green",
    fontSize: 18,
    
  },
  modalStyle: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  focusedInput: {
    borderColor: "red",
    borderWidth: 2,
  },
  btnModal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  requiredText: {
    color: "red",
    marginBottom: 5,
    marginLeft: 10,
  },
});
