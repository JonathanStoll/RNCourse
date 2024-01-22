import React, { useState } from "react"
import { TextInput, Button, View, StyleSheet } from "react-native"

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandeler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandeler(){
        props.onPress(enteredGoalText)
        setEnteredGoalText('')
    }
    return (<View style={styles.inputContainer}>
        <TextInput
            placeholder="your goal"
            style={styles.textInput}
            onChangeText={goalInputHandeler}
            value={enteredGoalText} />
        <Button title='Add Goal' onPress={addGoalHandeler} />
    </View>)
}

export default GoalInput
const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },

});