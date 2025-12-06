import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert('Hata', 'Şifreler uyuşmuyor!');
        } else {
            console.log('Kayıt başarılı');
            Alert.alert('Bilgi', 'Kayıt başarılı');
            navigation.navigate('Home'); // ✅ HomeScreen’e yönlendirme
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt Ol</Text>
            <TextInput
                style={styles.input}
                placeholder="E-posta"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Şifre"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Şifre Tekrar"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Kayıt Ol" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 12, borderRadius: 5 }
});
