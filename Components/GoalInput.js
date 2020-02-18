import React from 'react';
//import {View, Text, StyleSheet} from 'react-native';


const GoalInput = props => {
    return (

 <View style={styles.InputContainer}> 
         <TextInput placeholder="Search Here"
          style={{borderColor:"black",
          borderWidth:2 }}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
          <Button title="Add" onPress={addGoalHandler}/> 
       </View>  
      

 );
};


const styles = StyleSheet.create({

});

export default GoalInput;