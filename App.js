import React, {useState} from 'react';
import { StyleSheet,Button,Text,View,TextInput,ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() { 
 // const [enteredGoal, setEnteredGoal] = useState ('');
  const [courseGoals, setCourseGoals] = useState([]);

 
  const addGoalHandler = goalTitle => {
       setCourseGoals(currentGoals => [
       ...currentGoals,
        { id: Math.random().toString(), value: goalTitle}
       ]);
   //In Native App we use Key or id both as an tag    
   //setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
   //console.log(enteredGoal);
  };
  return (
    <View style={styles.screen}>       
     <GoalInput onAddGoal={addGoalHandler}/>
     <FlatList 
        keyExtractor={(item,index) => item.id}
          data={courseGoals} renderItem={itemData => (
             <View style={styles.listItem}>
             <Text>{itemData.item.value}</Text>
             </View>
          )}/>
       </View>
);
}
const styles = StyleSheet.create({
screen:{
  padding: 10
},
});