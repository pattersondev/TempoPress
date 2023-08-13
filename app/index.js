import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const App = () => {
    const onPress = () => { console.log('hey') }
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.header}>TempoPress</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
                        <Text style={styles.text}>Bench Press</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Squat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Deadlift</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '20%',
        backgroundColor: 'steelblue',
        justifyContent: 'top',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        gap: 20,
    },
    wrapper: {
        flex: 1
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'snow',
        width: '40%',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    header: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        color: 'snow',
        fontWeight: 'bold',
        paddingBottom: 20,
        width: '100%',
        textAlign: 'center',
        fontSize: 35,
    }
})

export default App;