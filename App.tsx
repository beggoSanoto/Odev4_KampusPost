import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ekranları import ediyoruz
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';

// Stack Navigator'ı başlatıyoruz
const Stack = createNativeStackNavigator();

// 1. Adım: NavigationContainer ve Stack Navigator yapısı
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* 1. Madde 4: Ekranları Stack'e ekle */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Giriş Yap' }} // Başlığı özelleştir
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Yeni Kayıt' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'KampusPost Akışı' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;