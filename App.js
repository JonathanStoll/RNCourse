import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [courseGoals, setCoursGoals] = useState([])

  function addGoalHandeler(enteredGoalText) {
    setCoursGoals(currentGoals => [...currentGoals, {text:enteredGoalText, id: Math.random().toString()}])
  }
  function deleteGoalHandeler(id){
    setCoursGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !== id)
    })
  }
  return (
    <View style={styles.appContainer}>
     <GoalInput onPress={addGoalHandeler}/>
      <View style={styles.goalContainer}>
        <FlatList
        data={courseGoals}
        renderItem={item=>{
          return (
           <GoalItem text={item.item.text} onDeleteItem={deleteGoalHandeler} id={item.item.id} />
          )
        }}
        keyExtractor={(item)=>{
          return item.id
        }}
       / >
        
          

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalContainer: {
    flex: 5,
  },
 
});