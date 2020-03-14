import React, {useState} from 'react';
import { Image } from 'react-native';
import { TouchableOpacity,StyleSheet,Button,Text,View,TextInput,ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() { 
  const [enteredGoal, setEnteredGoal] = useState ('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

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
         <TextInput style={styles.input} placeholder="Search Here"      
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
          <TouchableOpacity
  accessible={true}
  accessibilityLabel="Tap me!"
  onPress={this._onPress}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>
       </View>
);}

const styles = StyleSheet.create({
screen:{
  padding: 50
},
input:{
  backgroundColor:'yellow',
  borderColor:"black",
  borderWidth:1,
  width:50
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
},
buttonText:{
   backgroundColor:'black',
   color:'white',
   width:50,
   height:20,
   textAlign:'center'
   
}
});