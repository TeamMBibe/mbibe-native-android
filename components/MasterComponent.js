import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import {TabNavigator} from 'react-navigation'

import Feed from './screens/Feed'
import Me from './screens/Me'
import {Tabs} from './util/Tabs'
import AndroidDrawer from './util/AndroidDrawer'
import OpenDraweFromToolbar from './util/OpenDraweFromToolbar'

export default class MasterComponent extends React.Component {
    render() {
        return (
            <OpenDraweFromToolbar />
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

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#4C3E54'},
        title: 'Welcome!',
        headerTintColor: 'white',
    })
})