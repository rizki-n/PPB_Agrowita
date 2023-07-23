import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Route/Navigation';
import QR_Code from './Screen/QR_Code';
import Homepage from './Screen/Homepage';
import Scanner from './Screen/Scanner';
import History from './Screen/History';

export default function App() {
  return (
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    
    // <QR_Code/>
    // <Homepage/>
    // <Scanner/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
