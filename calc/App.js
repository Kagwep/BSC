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

  if (valueinitins != 0 ){

  this.setState({
    value : valueinitins - 1
  })
 }

  }


  render (){
    return(
    

      <View style={{
        alignItems:"center",
        justifyContent:"center", 
        flex:1,
        flexDirection:"column"
        }}>
        <Text> Calculator </Text>
        <Text style={{padding:10}}>
              {this.state.value}
        </Text>
        <View 
        style={{
          flexDirection:"row",
          width:"100%",
          borderColor:"green",
          justifyContent:"space-around",
          margin:5
          
          }}>
            { this.state.value >= 10 ?
            (<Text style={{margin:5 }}> You have reached 10</Text> ) 
            : null
            }

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
            {
              this.state.value == 0 ?
              null
              :
              (
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

              )
            }


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
