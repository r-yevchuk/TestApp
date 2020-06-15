import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';


export default class ImageScreen extends Component{
    render() {
        const { image } = this.props.route.params;
        return(
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{uri: image}}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null}
});
