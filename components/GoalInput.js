import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandeler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandeler() {
    props.onPress(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animation="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder="your goal"
          style={styles.textInput}
          onChangeText={goalInputHandeler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View  style={styles.button}>
            <Button title="Cancel" onPress={props.onClose}  color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandeler}  color='#a570e9'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#db80b3",
    backgroundColor: "#db80b3",
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button:{
    width: '30%',
    marginHorizontal:8,
  },
  image:{
    width: 100,
    height: 100,
    padiing: 16,
  }
});
