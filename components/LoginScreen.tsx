import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// Navigasyon için gerekli import (prop olarak gelmesi için)
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
// Varsayılan CustomInput importu
// import CustomInput from './CustomInput'; 

// Eğer CustomButton yoksa, TouchableOpacity kullanırız.

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // 2. Adım: Navigasyon hook'unu kullanma
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    // 2. Madde 2: Giriş Yap Butonu Davranışı
    const handleLogin = () => {
        // Şifre kontrolü yok, doğrudan Home ekranına yönlendir
        console.log(`Giriş yapılıyor: Email: ${email}, Şifre: ${password}`);
        navigation.navigate('Home');
    };

    // 2. Madde 2: Kayıt Ol Butonu Davranışı
    const handleRegister = () => {
        // Register ekranına yönlendir
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>KampusPost</Text>

            {/* CustomInput bileşeni burada kullanılmalıdır (varsayılıyor) */}
            {/* <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> 
      */}
            {/* CustomInput'ı taklit eden basit TextInput alanları (eğer CustomInput yoksa) */}
            <View style={styles.inputPlaceholder}>
                <Text style={styles.placeholderText}>E-posta Alanı (CustomInput)</Text>
            </View>
            <View style={styles.inputPlaceholder}>
                <Text style={styles.placeholderText}>Şifre Alanı (CustomInput)</Text>
            </View>


            {/* 2. Madde 1: Giriş Yap Butonu */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>

            {/* 2. Madde 1: Kayıt Ol Butonu */}
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={handleRegister}>
                <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007AFF',
        textAlign: 'center',
        marginBottom: 40,
    },
    // CustomInput olmadığında kullanılan taklit stil
    inputPlaceholder: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    placeholderText: {
        color: '#999',
    },
    // Buton stilleri
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    secondaryButton: {
        backgroundColor: '#4CD964', // Daha farklı bir renk
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;