import React, {useState} from 'react';
import {View,StyleSheet,Button, TextInput} from 'react-native';


const GoalInput = props => {
   const [enteredGoal, setEnteredGoal] = useState (''); 
    const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };
  return (
  <View style={styles.InputContainer}> 
         <TextInput placeholder="Search Here"
          style={{borderColor:"black",
          borderWidth:2 }}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
          <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)}/> 
       </View>  

);
};
const styles = StyleSheet.create({
InputContainer:{
   flexDirection: 'row',
   justifyContent: 'space-between', 
   alignItems:'center'
}
});

export default GoalInput;