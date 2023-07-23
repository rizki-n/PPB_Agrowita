import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const History = () => {
    const history = [
        { id:1 , tgl:'Reservasi 22-09-2023'},
        { id:2 , tgl:'Reservasi 22-09-2023'},
        { id:3 , tgl:'Reservasi 22-09-2023'},
        { id:4 , tgl:'Reservasi 22-09-2023'},
        { id:5 , tgl:'Reservasi 22-09-2023'},
    ]

    return (
        <View style={styles.container}>
            
            <FlatList
                data={history}
                renderItem={({item}) => (
                    <Text style={styles.history}>{item.tgl}</Text>    
                )}  
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingTop: 25
    },
    history:{
        marginTop: 10,
        padding: 30,
        backgroundColor: '#2FB500',
        fontSize: 20,
        color:'white',
        borderRadius: 15
    }
})

export default History;
