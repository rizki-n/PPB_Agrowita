import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../Screen/LoginPage';
import Homepage from '../Screen/Homepage';
import QR_Code from '../Screen/QR_Code';
import Scanner from '../Screen/Scanner';
import History from '../Screen/History';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
       <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginPage}/>
            <Stack.Screen name='Home' component={Homepage}/>
            <Stack.Screen name='QR' component={QR_Code}/>
            <Stack.Screen name='Barcode' component={Scanner}/>
            <Stack.Screen name='History' component={History}/>
       </Stack.Navigator> 
    );
}

const styles = StyleSheet.create({})

export default Navigation;
