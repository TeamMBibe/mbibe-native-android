'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ScrollView,
} from 'react-native';

import AndroidToolbar from './AndroidToolbar'


export default class OpenDraweFromToolbar extends Component {
    render() {

        var navigationView = (
            <ScrollView>
                <View style = {{height:100, backgroundColor:'blue', justifyContent:'center'}}>
                    <Text style = {{height:25, color:'white', fontSize:25, marginLeft:20}}>Welcome To ReactNative</Text>
                </View>

                //render your list items
            </ScrollView>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref={'DRAWER'}>
                <AndroidToolbar style={styles.toolbar}
                           title={'Calendar'}
                           navigator={this.props.navigator}
                           sidebarRef={()=>this._setDrawer()}/>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>

                </View>
            </DrawerLayoutAndroid>
        );
    }

    _setDrawer() {
        this.refs['DRAWER'].openDrawer();
    }
}

    const styles = StyleSheet.create({
        //your own style implementation

    });

    module.exports = OpenDraweFromToolbar;