import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

const TodoItem = ({item,pressHandler}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
   item:{
        padding:16,
        marginTop:16,
        borderWidth:1,
        borderColor:'#bbb', 
        borderRadius:10,
   }

})

export default TodoItem
