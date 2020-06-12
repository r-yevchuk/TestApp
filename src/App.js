/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, VirtualizedList} from 'react-native';

const DATA = [];

const getItem = (data, index) => {
    return {
        id: "id" + index,
        key: "key" + index,
        title: `Item ${index+1}`
    }
}

const getItemCount = (data) => {
    return 50;
}

const Item = ({ title })=> {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 4,
        marginHorizontal: 8,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

