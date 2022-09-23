 import React from "react";
 import { Component } from "react";
import { TouchableOpacity, View,Text,Alert } from "react-native";

 class MyFirstExpoApp extends Component{

  constructor (props){
    super(props);

  
  }

  


  render (){
    return (
      <View style={{flex:1,borderWidth:2,borderColor:"blue",marginTop:25,flexDirection:"column"}}>
        <View style={{flex:1,borderWidth:1,borderColor:"black",flexDirection:'row',justifyContent:"space-around",padding:2,alignItems:"center"}}>
          <View style={{borderColor:"green",borderWidth:1,flex:1,padding:2,margin:2,height:50+"%",backgroundColor:"blue"}}> 
            <Text > icon</Text>
          </View>
          <View style={{borderColor:"green",borderWidth:1,flex:9,borderRadius:2,height:50+"%",justifyContent:'flex-start',alignItems:"center",flexDirection:"row"}}> 
            <Text > search products</Text>
          </View>
        </View>
        <View style={{flex:1.5,borderWidth:1,borderColor:"black",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
          <View style={{width:20+"%",height:80+"%",borderWidth:1,padding:2,margin:2,borderRadius:5,backgroundColor:"brown",flexDirection:"column"}}>
            
            <View style={{height:60+"%",justifyContent:"center",alignItems:"center"}}>
              <Text> IC </Text>
            </View>
            <View style={{height:30+"%"}}>
            <Text> products</Text>
            </View>
            
          </View>
          <View style={{width:20+"%",height:80+"%",borderWidth:1,padding:2,margin:2,borderRadius:5,backgroundColor:"magenta"}}>
          <View style={{height:60+"%",justifyContent:"center",alignItems:"center"}}>
              <Text> IC </Text>
            </View>
            <View style={{height:30+"%"}}>
            <Text> rep</Text>
            </View>
          </View>
          <View style={{width:20+"%",height:80+"%",borderWidth:1,padding:2,margin:2,borderRadius:5,backgroundColor:"brown"}}>
          <View style={{height:60+"%",justifyContent:"center",alignItems:"center"}}>
              <Text> IC </Text>
            </View>
            <View style={{height:30+"%"}}>
            <Text> products</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1,borderWidth:1,borderColor:"black",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}> 
          <TouchableOpacity style={{margin:5,backgroundColor:"red",padding:5,borderRadius:3}} > 
            <Text> new products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:5}}> 
            <Text style={{color:"orange"}}> see all</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:3,borderWidth:1,borderColor:"black",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <View style={{flex:1,borderWidth:1,height:95+"%",flexDirection:"column",margin:2,borderRadius:5,alignItems:"center",justifyContent:"space-between"}}>
            <View style={{height:50+"%",borderRadius:5}}>
               <Text> image </Text>
               
            </View>
            <View style={{height:30+"%"}}>
               <Text> desc </Text>
               
            </View>
            <View style={{height:20+"%"}}> 
              <Text> price </Text>
              
            </View>
          </View>
          <View style={{flex:1,borderWidth:1,height:95+"%",flexDirection:"column",margin:2,borderRadius:5,alignItems:"center",justifyContent:"space-between"}}>
            <View>
               <Text> image </Text>
               
            </View>
            <View>
               <Text> desc </Text>
               
            </View>
            <View> 
              <Text> price </Text>
              
            </View>
          </View>
        </View>
        <View style={{flex:4.5,borderWidth:1,borderColor:"black",margin:2}}>
          <View>
            <Text> box </Text>

          </View>

        </View>
      </View>
    );

  }
 }

 export default MyFirstExpoApp;
