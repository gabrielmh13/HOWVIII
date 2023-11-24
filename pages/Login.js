import React, {useState} from 'react';

import { View, Text, StyleSheet, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../components/Input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if(email.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
            navigation.navigate('Home')
        } else {
            alert('Login Incorreto, tente: admin:admin')
        }
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                ADOTE JÁ!
            </Text>
        </View>

        <Input text="Digite seu e-mail" 
            value={email}
            onChangeText={setEmail}
        />
        <Input text="Digite sua senha" 
            value={password}
            onChangeText={setPassword}
        />

        <Pressable onPress={handleLogin} style={styles.button} >
            <Text style={styles.text}>Entrar</Text>
        </Pressable>

        <Pressable onPress={() => alert('Disabled!')} >
            <Text style={styles.text}>Criar Conta</Text>
        </Pressable>

        <Pressable onPress={() => alert('Disabled!')} >
            <Text style={styles.text}>Recuperar Senha</Text>
        </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        top: 1,
    },
    headerText: {
        fontSize: 40,
        color: 'red',
        fontWeight: 'bold',
    },
    
    button: {
        width: '40%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})