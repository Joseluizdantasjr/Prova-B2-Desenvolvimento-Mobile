import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogoRPG from './src/pages/CatalogoRPG/CatalogoRPG';
import Login from './src/pages/Login/Login';
import EsqueciSenha from './src/pages/EsqueciSenha/EsqueciSenha';
import Cadastro from './src/pages/Cadastro/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Login'>
      <Stack.Screen name = 'Login' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name = 'CatalogoRPG' component={CatalogoRPG}/>
      <Stack.Screen name = 'EsqueciSenha' component={EsqueciSenha}/>
      
      <Stack.Screen name = 'Cadastro' component={Cadastro}/>

    </Stack.Navigator>
    
  </NavigationContainer> 
  );
}
