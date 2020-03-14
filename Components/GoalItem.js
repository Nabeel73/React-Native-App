import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const GoalItem = props => {
    return  
     <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
             </View>
};


const styles =StyleSheet.create({

listItem:{
padding:10,
marginVertical:5,
borderColor:'red',
borderWidth:1,
backgroundColor:'lightgrey'
}

});

export default GoalItem;