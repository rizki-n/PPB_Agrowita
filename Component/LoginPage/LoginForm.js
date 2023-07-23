import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { TextInput, View, Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';



const LoginForm = () => {
    const navigation = useNavigation();     //agar componen LoginPage bisa stacking ke Home
    const [Mail, setPhone] = useState('');
    const [ValidPhone, setValidPhone] = useState('');
    const HandlerValidPhone = (value) => {
        if (value){
            setValidPhone('');
        }else{
            setValidPhone('Masukan Nomor Telphone')
        }
    }
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.frm_row}>    
                <Text style={{ color:'white' }}>No Telphone</Text>
                <TextInput style={styles.text_input}
                
                placeholder=""
                keyboardType="numeric"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => HandlerValidPhone(text)}
                />
                <Text style={{color:'red'}}>{ValidPhone}</Text>
            </View>

            {/*<View style={styles.frm_row}>
                <Text>Password</Text>
                <TextInput style={styles.text_input}
                placeholder="Password"
                keyboardType="-password"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                />
            </View>*/}
                            {/* HandlerValidPhone bisa dimasukan kedalam onPress */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btn_signin}>Submit</Text>
            </TouchableOpacity>
        </View>
            
        
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    frm_row: { marginBottom: 15 },
        text_label: {
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 16,
    },
    text_input: {
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        color: "grey",
    },
    btn_signin: {
        backgroundColor: "white",
        color: 'black',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop:0,
        textAlign: 'center'

    },
    btn_signin_text:{ color: "white", textAlign: "center", fontSize: 16 }
});