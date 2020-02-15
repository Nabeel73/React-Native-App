import React, {useState} from 'react';
import { StyleSheet,Button,Text,View,TextInput } from 'react-native';

export default function App() { 
  const [enteredGoal, setEnteredGoal] = useState ('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  }

  const addGoalHandler = () => {
      setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
    //console.log(enteredGoal);
  }
  return (
    <View style={{padding:50}}>
     <Text>Hello React Native</Text>
       <View style={{styles}}> 
         <TextInput placeholder="Search Here"
          style={{borderColor:"black",
          borderWidth:2 }}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
          <Button title="Add" onPress={addGoalHandler}/> 
        </View>  
       <View>
     {courseGoals.map((goal) => <Text>{goal}</Text>)}

        </View>
       </View>
);
}

const styles = StyleSheet.create({
screen:{
  padding: 50
},
inputContainer:{
 // flexDirection: 'row',
   justifyContent: 'space-between', 
   alignItems:'center'
}
});
