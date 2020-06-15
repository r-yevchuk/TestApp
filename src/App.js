/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Home from './Home';
import ImageScreen from './Image';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class App extends Component{

    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Image" component={ImageScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

