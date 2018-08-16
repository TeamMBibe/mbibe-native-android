import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterComponent from './components/MasterComponent'


export default class App extends React.Component {
  render() {
    return (
      <MasterComponent/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
