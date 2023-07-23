import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class QR_Code extends Component {
    render() {
        return (
            <View style={styles.container}>
                  
                <View>
                    <QRCode value='test'
                    color='black'
                    size={250}
                    logo={require('../assets/logoQR.png')} // or logo={{uri: base64logo}}
                    logoMargin={10}
                    logoSize={50}
                    logoBorderRadius={10}
                    />
                </View>
                <View>
                <Text style={styles.tekss}>Tunjukan Barcode ini pada pengelola</Text>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tekss:{
        margin: 10,
        fontSize: 15
    }
})

export default QR_Code;

