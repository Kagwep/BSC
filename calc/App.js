 import React from "react";
 import { Component } from "react";
import { TouchableOpacity, View,Text,Alert } from "react-native";

 class MyFirstExpoApp extends Component{

  constructor (props){
    super(props);

    this.state ={
      value:0
    }

  }

  ButtonClicked = () => {
    Alert.alert(" Im clicked")

  }
 add = () => {
  let valueinit = this.state.value;

  this.setState({
    value : valueinit +1 
  })
 }

 sub = () => {
  let valueinitins = this.state.value

  this.setState({
    value : valueinitins - 1
  })
 }

  render (){
    return(

      <View style={{alignItems:"center",justifyContent:"center", padding:50}}>
        <Text> Calculator </Text>
        <View>
        <View style={{flex:"row"}}> 

          <Text style={{padding:10}}>
            {this.state.value}
          </Text>

          </View>
          <TouchableOpacity

          onPress={this.add}

          style={{ width:70, 
            height:30, 
            backgroundColor:"green",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:5,
            margin:5
          }}
          >
            <Text> + </Text>

          </TouchableOpacity>

          <TouchableOpacity
          onPress={this.sub}
                  style={{ width:70, 
                    height:30, 
                    backgroundColor:"red",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:5,
                    margin:5,
                  }}

                  
          >
            <Text> - </Text>
          </TouchableOpacity>
        </View>
        
        {/* <TouchableOpacity 
        onPress={this.add}
        style={{width:100,height:50,backgroundColor:'green', justifyContent:'center',alignItems:'center'}} > <Text> clic </Text>
         </TouchableOpacity>
         <TouchableOpacity 
        onPress={this.sub}
        style={{width:100,height:50,backgroundColor:'green', justifyContent:'center',alignItems:'center'}} > <Text>  - </Text>
         </TouchableOpacity> */}
      </View>
    );

  }
 }

 export default MyFirstExpoApp;
