import React from 'react';
import {Button, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import Colors from '../config/colors';

const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Button style={styles.button} title="Read Now" onPress={() => navigation.navigate('BookList')} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default WelcomeScreen;