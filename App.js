import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from './config';
import firebase from 'firebase';
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name:'',
      number:'',
    }
  }
  render(){
  return (
    <View>
      <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'center'}}>Tshirt Customiser</Text>
      <TextInput style={{alignSelf:'center', borderWidth:2, marginTop:20 }}placeholder="Name" onChangeText={(text)=>{this.setState({name:text})}} />
      <TextInput style={{alignSelf:'center', borderWidth:2, marginTop:10 }}placeholder="Number" onChangeText={(text)=>{this.setState({number:text})}}/>
      <TouchableOpacity style={{alignSelf:'center', marginTop:10, borderWidth:2,borderRadius:10,}}>Customise</TouchableOpacity>
    </View>
  );
}
}

