import React, {useState} from 'react';
import { StyleSheet,Button,Text,View,TextInput,ScrollView,FlatList } from 'react-native';

export default function App() { 
  const [enteredGoal, setEnteredGoal] = useState ('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  }

  const addGoalHandler = () => {
       setCourseGoals(currentGoals => [
       ...currentGoals,
        { id: Math.random().toString(), value: enteredGoal}
       ]);
   //In Native App we use Key or id both as an tag    
   //setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
   //console.log(enteredGoal);
  };
  return (
    <View style={styles.screen}>
     <Text>Hello React Native</Text>
       <View style={styles.InputContainer}> 
         <TextInput placeholder="Search Here"
          style={{borderColor:"black",
          borderWidth:2 }}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
          <Button title="Add" onPress={addGoalHandler}/> 
       </View>  
       //Using ScrollView for scrolling the list items 
       //Note: for whole page scrollable use scollView tag as Container
       //ScrollView use depends on list of items or depend on the condition 1 to 20 are               enough after 20 or 10 more items we use flatlist view as an array type.

      /*<ScrollView>
          {courseGoals.map(goal => (
           <View key={goal}
             style={styles.listItem}><Text>{goal}</Text></View>))}
          </ScrollView>*/
          //flatlist has 2 porpoerties one is data 
        <FlatList 
        keyExtractor={(item,index) => item.id}
          data={courseGoals} renderItem={itemData => (
             <View style={styles.listItem}>
             <Text>{itemData.item.value}</Text>
             </View>
          )}/>
       </View>
);}

const styles = StyleSheet.create({
screen:{
  padding: 50
},
InputContainer:{
   flexDirection: 'row',
   justifyContent: 'space-between', 
   alignItems:'center'
},
listItem:{
padding:10,
marginVertical:5,
borderColor:'red',
borderWidth:1,
backgroundColor:'lightgrey'
}
});
