import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCoursGoals] = useState([])
  function goalInputHandeler(enteredText) {
    setEnteredGoalText(enteredText)

  }
  function addGoalHandeler() {
    setCoursGoals(currentGoals => [...currentGoals, {text:enteredGoalText, id: Math.random().toString()}])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="your goal"
          style={styles.textInput}
          onChangeText={goalInputHandeler} />
        <Button title='Add Goal' onPress={addGoalHandeler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
        data={courseGoals}
        renderItem={item=>{
          return (
            <View style={styles.goalItem}>
            <Text style={styles.goalText} >
              {item.item.text}
            </Text>
          </View>
          )
        }}
        keyExtractor={(item,index)=>{
          return item.id
        }}
       / >
        
          

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  goalContainer: {
    flex: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  goalText: {
    color: 'white',
  }
});