 import React from "react";
 import { Component } from "react";
 import homescreen from "./componenets/homescreen";
import { TouchableOpacity, View,Text,Alert } from "react-native";

 class MyFirstExpoApp extends Component{

  constructor (props){
    super(props);

  
  }



  render (){
    return (
      <homescreen />
    );

  }
 }

 export default MyFirstExpoApp;
