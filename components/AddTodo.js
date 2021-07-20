import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddTodo = ({handleSubmit}) => {
    const [text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }
  

    return (
        <View>
            <TextInput
            style={styles.input}
                placeholder='New Todo...'
                onChangeText={val=>changeHandler(val)}
            />
            <Button onPress={()=>handleSubmit(text)} color='coral' title='Add todo'/>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:7,
        borderBottomWidth:1,
        borderBottomColor:'#bbb'
    }
})
