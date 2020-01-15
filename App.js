/*import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { render } from 'react-dom';
import Constants from 'expo-constants';

export default function App() {  
  return (
    <View style={{padding:50}}>
       <View style={{styles,inputContainer}}> 
         <TextInput    placeholder="Search Here" />
          style={{borderColor:"blue", borderWidth:4 }}/>
          <button title="Add"/> 
        </View>
      <Text>Hello React Native</Text>
        <Button title="Press me" onPress={() => Alert.alert('Cannot press this one')} />    
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
});*/
import React, { Component } from 'react';
import { Text, TextInput, View,Button } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 100, flexDirection:"column", justifyContent:"center" }}>
        <TextInput
          style={{height: 100,borderWidth:3,borderColor:"red",width:200}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42, }}>
          {this.state.text.split(' ').map((word) => word && '').join(' ')}
        </Text>
        <Button  onPress={() => {    alert('You tapped the button!');}}  title="ADD"/>
        
        <Button  onPress={() => {    alert('You tapped the button!');}}  title="login In"/>
      </View>
    );
  }
}

