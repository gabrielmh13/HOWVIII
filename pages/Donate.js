import React, { useState } from 'react';

import { Text, StyleSheet, Pressable, KeyboardAvoidingView, View, Platform } from "react-native"
import RadioGroup from 'react-native-radio-buttons-group';

import Input from '../components/Input';

export default function Donate({ navigation }) {
    const [size, setSize] = useState();
    const [sex, setSex] = useState();

    const sizeList = [
        {
            id: '1',
            label: 'Pequeno',
            value: 'pequeno'
        },
        {
            id: '2',
            label: 'Médio',
            value: 'medio'
        },
        {
            id: '3',
            label: 'Grande',
            value: 'grande'
        }
    ]

    const sexList = [
        {
            id: '1',
            label: 'Macho',
            value: 'macho'
        },
        {
            id: '2',
            label: 'Fêmea',
            value: 'femea'
        }
    ]

    function handleUpload(){
        alert('Disabled!')
    }

    function handleSubmit(){
        alert('Enviado com sucesso!')
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.radioView}>
                    <Text style={styles.text}>Escolha o porte</Text>

                    <RadioGroup 
                        radioButtons={sizeList}
                        onPress={setSize}
                        selectedId={size}
                        containerStyle={styles.radioGroup}
                    />
                </View>

                <View style={styles.radioView}>
                    <Text style={styles.text}>Escolha o sexo</Text>

                    <RadioGroup 
                        radioButtons={sexList}
                        onPress={setSex}
                        selectedId={sex}
                        containerStyle={styles.radioGroup}
                    />
                </View>

                <Input text="Digite seu cep" />

                <Input text="Fale sobre o cachorro" />

                <Pressable style={styles.button} onPress={handleUpload}>
                    <Text style={styles.text}>Anexar foto</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Enviar</Text>
                </Pressable>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 25
    },

    radioView: {
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'left',
        justifyContent: 'left',
        padding: 10,
    },

    radioGroup: {
        width: '100%',
        alignItems: 'left',
        justifyContent: 'left'
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },

    button: {
        backgroundColor: '#D9D9D9',
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
})