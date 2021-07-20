import React,{useState} from 'react';
import { Alert, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {

  const [todos,setTodos]=useState([])

  const pressHandler=(key)=>{
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this todo",
      [
        {
          text: "Ok",
          onPress: () => setTodos(prevTodos=>{
            return prevTodos.filter(todo=>todo.key!=key); 
          }),
        },
        {
          text: "Cancel",
          onPress: () => '',
          style: "cancel",
        }
      ]
    )
    
  }
  const handleSubmit=(text)=>{
    if(text.length>3){
      setTodos(prevTodos=>{
        return [
          ...prevTodos,
          {key:Math.random().toString(),text:text}
        ]
      })
    }else{
      Alert.alert('OOPS!','Todos must be over 3 characters long!!',[
        {text:'understood',onPress:()=>console.log('alert closed')}
      ])
    }
}
  
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
      <View>
      <Header/>
      <View style={styles.content}>
        <AddTodo handleSubmit={handleSubmit}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
      </View>
      <View>
        <Footer/>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'space-between'
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
});
