import React from 'react';
import { StyleSheet, View } from 'react-native';
import {TabNavigator} from 'react-navigation'

import Feed from '../screens/Feed'
import Me from '../screens/Me'

export const Tabs = TabNavigator({
    Feed: {
        screen: Feed,
    },
    Me: {
        screen: Me,
    },
});
