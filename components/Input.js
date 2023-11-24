import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input({ text, ...rest }) {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder={text}
            {...rest}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

    input: {
        width: '70%',
        height: 50,
        margin: 10,
        padding: 10,
        backgroundColor: '#D9D9D9',
    },
})