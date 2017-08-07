/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, TextInput, View, ToolbarAndroid, Image,TouchableHighlight, Dimensions,
} from 'react-native';

export default class FauziAzmiFirstApp extends Component {
  render() {

    //let judul='React Native';
    return (
      <View style={styles.container}>
      <ToolbarAndroid
                navIcon={require('./images/back_arrow.png')}
                title='REPORT AN INCIDENT'


                          //onIconClicked={() => this.props.navigator.pop()}
                style={styles.toolbar}
                titleColor='white'
              />
        <TextInput
          style={styles.form}
             placeholder = "Machine Type"
             underlineColorAndroid = "transparent"
        />
        <TextInput
                  style={styles.form}
            placeholder = "Machine Serial Number"
            underlineColorAndroid = "transparent"
         />
        <TextInput
                          style={styles.form}
            placeholder = "Problem"
            underlineColorAndroid = "transparent"
         />
        <TextInput
                          style={styles.form}
                           placeholder = "Person in Charge"
                           underlineColorAndroid = "transparent"

         />
         <TextInput
                          style={styles.form}
                           placeholder = "PIC Phone Number"
                           underlineColorAndroid = "transparent"
         />
         <TextInput
                          style={styles.form}
                        placeholder = "PIC Email"
                        underlineColorAndroid = "transparent"
         />
         <View style={styles.submitButton}>
                  <TouchableHighlight>
                     <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableHighlight>
               </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //position: 'absolute',
    flex: 1,
    backgroundColor: 'whitesmoke',
    //flexDirection:'column',
  },
  toolbar: {
        //flexDirection:'column',
        //alignItems:'center',
        height: 56,
      backgroundColor: '#4883da',
    },
  form: {
    height: 60,
    //margin: 5,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    width: Dimensions.get('window').width - 20,
    //borderColor: 'gray',
    //borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  submitButton: {
     position:'absolute',
     bottom: 0,
     height:60,
     width: Dimensions.get('window').width,
     backgroundColor:'skyblue',
     justifyContent:'center',
     alignItems: 'center',
   },
   submitButtonText: {
   fontSize: 18,
   color: 'white',
   textAlign: 'center'
   }
});

AppRegistry.registerComponent('FauziAzmiFirstApp', () => FauziAzmiFirstApp);






