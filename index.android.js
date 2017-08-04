/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions
} from 'react-native';

export default class FauziAzmiFirstApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
   }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          REPORT AN INCIDENT
        </Text>
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

         <TouchableOpacity>
                     <Text style = {styles.button}>
                        Submit
                     </Text>
         </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form: {
    height: 40,
    margin: 5,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    color: 'white',
    //alignSelf: 'stretch',
    //textAlign: 'center',
    //flex: 0.1,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'skyblue',

  }
});

AppRegistry.registerComponent('FauziAzmiFirstApp', () => FauziAzmiFirstApp);
