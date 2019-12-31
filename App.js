import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30 }}>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}> 
         <TextInput
          placeholder="Search Here" 
          style={{borderColor:"Blue", borderWidth:1 , padding: 10}}/>
            <button title="ADD"/>
           </View> 
           <View>

           </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  
});
