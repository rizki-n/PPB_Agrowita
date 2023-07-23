import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native';
import LoginForm from '../Component/LoginPage/LoginForm';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <ImageBackground source={require('../assets/loginBG2.jpg')} resizeMode='cover' style={styles.ImgBG}>
            <View style={styles.backLogo}>
              <Image
                source={require('../assets/logobulat.png')}
                style={{ width: 150, height: 150 }}
              />
            </View>
          </ImageBackground>
        
          <KeyboardAvoidingView style={styles.backLogin} behavior="padding" enabled>
            <LoginForm/>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  backLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backLogin: {
    flex: 1,
    backgroundColor: '#638d0d',
    borderTopLeftRadius: 30, borderTopRightRadius: 30,
    
  },
  ImgBG:{
    flex:2, height: 650,
    justifyContent:'center',
    flexDirection:'column',

  }
});

export default LoginPage;
