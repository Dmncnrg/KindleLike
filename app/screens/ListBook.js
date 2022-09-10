import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Colors from '../config/colors';
import BookDetails from './BookDetails';

const ListBook = ({navigation}) => {
    const books = [{id: 1, content: "Yes", nav: navigation},
                    {id: 2, content: "Yes", nav: navigation}]
    return (
        <SafeAreaView style={styles.container}>
            <BookDetails book={books[0]}/>
            <BookDetails book={books[1]}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

const viewBook = () => {
    return () => navigation.navigate('ViewBook')
}
export default ListBook;