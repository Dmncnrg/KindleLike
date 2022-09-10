import React from 'react';
import {Button, StyleSheet, SafeAreaView, Platform, StatusBar, Text, View} from 'react-native';
import Colors from '../config/colors';

function BookDetails(props) {
    return (
        <View style={styles.bookContainer}>
            <Text>Book {props.book.id}</Text>
            <Button title="Read" onPress={() => props.book.nav.navigate("ViewBook",props.book)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    bookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    }
})
export default BookDetails;