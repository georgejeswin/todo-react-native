import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text >Created by Jeswin George</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:20
    }
})
