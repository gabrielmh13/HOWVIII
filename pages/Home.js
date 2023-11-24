import { Text, StyleSheet, Pressable, Platform, KeyboardAvoidingView } from "react-native"

export default function Home({ navigation }){

    function handleAdopt() {
        navigation.navigate('Adopt')
    }

    function handleDonate() {
        navigation.navigate('Donate')
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            
            <Pressable style={styles.button} onPress={handleAdopt}>
                <Text style={styles.buttonText}>Quero Adotar</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleDonate}>
                <Text style={styles.buttonText}>Colocar para Adoção</Text>
            </Pressable>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#D9D9D9',
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    }
})