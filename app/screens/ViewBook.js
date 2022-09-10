import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Colors from '../config/colors';

import SampleBook1 from '../public/files/SampleBook1';
import SampleBook2 from '../public/files/SampleBook2';

function ViewBook(props) {
    const bookId = Number(props.route.params.id) - 1
    const book = [SampleBook1, SampleBook2]
    
    return (
        <ScrollView style={styles.container}>
            <Text>{book[bookId]}</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding: 10
    },
})

export default ViewBook;