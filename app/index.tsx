import Task from "@/components/Task";
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [task, setTask] = useState<string | undefined>();
  const [taskItems, setTaskItems] = useState<Array<any>>(['Hello', 'Temp', 'Test']);

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task]);
    setTask(undefined);
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        
        <View style={styles.items}>
          <Text style={styles.deleteText}>Delete task by clicking on it</Text>
          {/* This is where the tasks will go */}
          <>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                ) 
              })
            }
          </>
          {/* <Task text={'Task 1'} /> */}
        </View>
      </View>


      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'...'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style= { styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingLeft: 20,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {

  },
  deleteText: {
    color: 'red',
    fontWeight: 'light',
    marginBottom: 20,
  }
})