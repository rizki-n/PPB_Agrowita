import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const TombolScanQr = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection:'row', justifyContent:'center', justifyContent:'space-between', paddingHorizontal: 10 }}>
            <View style={styles.spc_scan}>
                <TouchableOpacity onPress={() => navigation.navigate('Barcode')}>
                    <Text style={styles.btn_ScanQR}>Scan</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.spc_QR}>
                <TouchableOpacity onPress={() => navigation.navigate('QR')}>
                    <Text style={styles.btn_ScanQR}>Show QR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.spc_hstry}>
                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                    <Text style={styles.btn_ScanQR}>History</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    spc_scan:{
        width: 110, height: 60,
        justifyContent:'center',
        
    },

    spc_QR:{
        width: 110, height: 60,
        justifyContent:'center',
    },

    spc_hstry:{
        width: 110, height: 60,
        justifyContent:'center',
    },

    btn_ScanQR: {
        textAlign: 'center',
        backgroundColor: "yellow",
        color: 'black', fontWeight:'bold',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
})

export default TombolScanQr;
