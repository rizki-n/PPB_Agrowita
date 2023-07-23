import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import TombolScanQr from '../Component/HomePage/TombolScanQr';
import Fasilitas from '../Component/HomePage/Fasilitas';
import Kuliner from '../Component/HomePage/Kuliner';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Homepage = () => {
    return (

        <SafeAreaView style={{ justifyContent:'center' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: 410, height: 200 }}>
                    <Image source={require('../assets/Header.png')}
                    style={{ width: 400, height: 200 }}
                    />
                </View>

                <View>
                    <TombolScanQr/>
                </View>

                <View style={styles.spc_fasilitas}>
                    <Fasilitas/>
                </View>
                                                        {/* Homepage jadikan rnfc */}
                <View style={styles.spc_fasilitas}>    
                    <Kuliner/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    spc_scan:{
        width: 170, height: 60,
        justifyContent:'center',
        borderWidth: 2
    },

    spc_QR:{
        width: 170, height: 60,
        justifyContent:'center',
        borderWidth: 2
    },

    spc_icon:{
        
    },

    btn_signin: {
        backgroundColor: "yellow",
        color: 'black',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    spc_fasilitas:{
        width: 400, height: 250,
        paddingLeft: 15
    }
})

export default Homepage;
