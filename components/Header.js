import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        height:100,
        paddingTop:39,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        marginTop:19,
        fontSize:24
    }

})