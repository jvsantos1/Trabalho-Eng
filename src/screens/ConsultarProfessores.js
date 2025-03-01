import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';


export default function ConsultarProfessores({navigation}) {
    return (
        <View style={styles.container}>
        <ImageBackground
        source={require('../assets/Fundo1.png')}
        style={styles.imageBackground}>
          <View style={styles.navbar}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <AntDesign name="bars" size={24} color="white" />
              </TouchableOpacity>
          </View>
  
          <Text style={styles.title}>Professores</Text>
          <View style={styles.formContext}>
          <View style={styles.container}>
            <FlatList
              data={[
                {key: 'Agnaldo Volpi'},
                {key: 'Saulo Correia'},
                {key: 'Robson Hebraico'},
                {key: 'Eudes'},
                {key: 'Murilo'},
                {key: 'Lucas'}
              ]}
              renderItem={({item})=> <Text style=
                {styles.item}>{item.key}</Text>}
              />
          </View>
           
  
          </View>
          
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      height:"auto"
    },
  
    title: {
      color:"#FFFFFF",
      fontSize:30,
      textAlign:"center",
      paddingBottom:30,
      marginTop: 80
    },
  
    formContext: {
      backgroundColor:"#FFFFFF",
      width:"85%",
      height:"60%",
      borderRadius:30,
      marginBottom:60
  },
  
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonCadastrar: {
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      width:"70%",
      backgroundColor:"#211DFF",
      paddingTop:14,
      paddingBottom:14,
      marginLeft:50,
      margin:25,
  },
  
  buttonText: {
      color:"#FFFFFF",
      fontSize:20,
  },
  
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:300
  }
});
