import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import { LogBox } from 'react-native';
import firebase from './src/services/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';


LogBox.ignoreAllLogs();
export default function App() {
  
 return (
 
   <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
        <Routes />
      </AuthProvider>
  </NavigationContainer>
  
  );
}